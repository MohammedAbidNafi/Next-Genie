[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU License][license-shield]][license-url]

# NextGenie 🧞‍♂️

A magical CLI tool to quickly generate Next.js app directory pages and layouts.

## Installation

NPM
```bash
npm install -g @abidnafi/nextgenie
```
Yarn
```bash
yarn global add @abidnafi/nextgenie
```
PNPM
```bash
pnpm add -g @abidnafi/nextgenie
```
Bun
```bash
bun install -g @abidnafi/nextgenie
```

## Features

- 🚀 Quickly generate Next.js pages and layouts
- 📁 Create nested page structures with a single command
- 🎯 Automatic layout.tsx generation
- ⚡️ Simple and intuitive syntax
- 🔥 Built with TypeScript for reliability

## Usage

### Creating Simple Pages

Create single or multiple pages directly in your app directory:

```bash
nextgenie create about contact
```

This will generate:

```
app/
  ├─ about/
  │   ├─ page.tsx
  │   └─ layout.tsx
  └─ contact/
      ├─ page.tsx
      └─ layout.tsx
```

### Creating Nested Pages

Create pages inside a specific folder using the `in` keyword:

```bash
nextgenie create profile settings in dashboard
```

This will generate:

```
app/
  └─ dashboard/
      ├─ layout.tsx
      ├─ profile/
      │   ├─ page.tsx
      │   └─ layout.tsx
      └─ settings/
          ├─ page.tsx
          └─ layout.tsx
```

## Generated Files

### page.tsx

```tsx
export default function PageName() {
  return <div>pageName page</div>;
}
```

### layout.tsx

```tsx
export default function LayoutName({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
```

## Requirements

- Node.js 16 or higher
- Next.js 13+ (App Directory)

## License
This project is licensed under GPL-3.0 [View License](LICENSE)

## Authors
<a href="https://github.com/MohammedAbidNafi/Next-Genie/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=MohammedAbidNafi/Next-Genie" alt="contrib.rocks image" />
</a>

## Contributing

[View CONTRIBUTING.md](CONTRIBUTING.md)


[contributors-shield]: https://img.shields.io/github/contributors/MohammedAbidNafi/Next-Genie.svg?style=for-the-badge
[contributors-url]: https://github.com/MohammedAbidNafi/Next-Genie/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/MohammedAbidNafi/Next-Genie.svg?style=for-the-badge
[forks-url]: https://github.com/MohammedAbidNafi/Next-Genie/network/members
[stars-shield]: https://img.shields.io/github/stars/MohammedAbidNafi/Next-Genie.svg?style=for-the-badge
[stars-url]: https://github.com/MohammedAbidNafi/Next-Genie/stargazers
[issues-shield]: https://img.shields.io/github/issues/MohammedAbidNafi/Next-Genie.svg?style=for-the-badge
[issues-url]: https://github.com/MohammedAbidNafi/Next-Genie/issues
[license-shield]: https://img.shields.io/github/license/MohammedAbidNafi/Next-Genie.svg?style=for-the-badge
[license-url]: https://github.com/MohammedAbidNafi/Next-Genie/blob/master/LICENSE.txt
