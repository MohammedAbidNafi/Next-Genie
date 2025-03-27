#!/usr/bin/env bun

import { program } from "commander";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const appDir = join(process.cwd(), "app");

program
  .command("create")
  .argument("<pages...>", "Pages to create, with optional root folder syntax")
  .description("Create Next.js pages with optional root folder")
  .action((args: string[]) => {
    let rootFolder: string | null = null;
    let pages: string[] = [];

    // Check for "in" keyword instead of arrows
    const separatorIndex = args.findIndex((arg) => arg.toLowerCase() === "in");

    if (separatorIndex !== -1) {
      // If "in" is present, treat the first argument as the root folder
      if (separatorIndex === 0 || separatorIndex === args.length - 1) {
        console.error(
          "❌ Invalid usage. Correct syntax: nextgenie create page1 page2 in root"
        );
        process.exit(1);
      }

      rootFolder = args[separatorIndex + 1] ?? ""; // Root folder after "in"
      pages = args.slice(0, separatorIndex); // Pages before "in"
    } else {
      pages = args;
    }

    if (pages.length === 0) {
      console.error("❌ No pages specified!");
      process.exit(1);
    }

    if (rootFolder) {
      const rootPath = join(appDir, rootFolder);

      // Create root folder if it doesn't exist
      if (!existsSync(rootPath)) {
        mkdirSync(rootPath, { recursive: true });

        // Create layout.tsx for root
        createLayout(rootPath, rootFolder);
      }

      // Create sub-pages inside the root folder
      pages.forEach((pageName) => {
        const pageSuccess = createPage(join(rootPath, pageName), pageName);
        const layoutSuccess = createLayout(join(rootPath, pageName), pageName);
        if (pageSuccess && layoutSuccess) {
          console.log(`✅ '${pageName}' created in ${rootFolder}!`);
        }
      });
    } else {
      // No root folder, create individual pages in app/
      pages.forEach((pageName) => {
        const pagePath = join(appDir, pageName);
        const pageSuccess = createPage(pagePath, pageName);
        const layoutSuccess = createLayout(pagePath, pageName);
        if (pageSuccess && layoutSuccess) {
          console.log(`✅ '${pageName}' created!`);
        }
      });
    }
  });

program.parse(process.argv);

// Function to create a page.tsx
function createPage(pagePath: string, pageName: string) {
  if (existsSync(pagePath)) {
    console.error(`❌ Page '${pageName}' already exists! Skipping...`);
    return false;
  }

  mkdirSync(pagePath, { recursive: true });

  const pageContent = `export default function ${capitalize(pageName)}Page() {
  return <div>${pageName} page</div>;
}`;
  writeFileSync(join(pagePath, "page.tsx"), pageContent);
  return true;
}

// Function to create a layout.tsx
function createLayout(folderPath: string, folderName: string) {
  const layoutPath = join(folderPath, "layout.tsx");
  if (!existsSync(layoutPath)) {
    const layoutContent = `export default function ${capitalize(
      folderName
    )}Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}`;
    writeFileSync(layoutPath, layoutContent);
    return true;
  }
}

// Capitalize first letter
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
