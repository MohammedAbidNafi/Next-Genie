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

Pull requests are welcome! Feel free to contribute to this project.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'add some amazingfeature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
