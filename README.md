# NextGenie 🧞‍♂️

A magical CLI tool to quickly generate Next.js app directory pages and layouts.

## Installation

```bash
npm install -g nextgenie
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

## Author

## Contributing

[View CONTRIBUTING.md](CONTRIBUTING.md)
