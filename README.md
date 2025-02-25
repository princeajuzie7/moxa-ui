# MOXA UI

[![GitHub stars](https://img.shields.io/github/stars/princeajuzie7/moxa-ui)](https://github.com/princeajuzie7/moxa-ui)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/princeajuzie7/moxa-ui/blob/main/LICENSE.md)
[![Build Status](https://img.shields.io/badge/status-coming)](https://moxaui.com)

Moxa UI is an open-source UI component library for React Native, inspired by [shadcn/ui](https://ui.shadcn.com). It provides reusable, customizable components built with [NativeWind](https://nativewind.dev).

## 🌟 Features

- ✅ Styled with Tailwind CSS (NativeWind)
- ✅ Mobile-first and accessible components
- ✅ Copy, paste, and customize
- ✅ CLI for easy installation
- ✅ TypeScript support
- ✅ Dark mode ready

## 📖 Documentation (Coming Soon)

- [Website](https://moxaui..com)
- [Examples](https://github.com/moxaui/examples)
- [Discord Community](https://discord.gg/moxaui)

## 🚀 Installation (Coming Soon)

### 1. Create a new React Native project:

```bash
npx create-expo-app@latest my-app -t @moxaui/template
cd my-app
```

### 2. Install dependencies:

```bash
pnpm add nativewind
pnpm add -D tailwindcss@3.3.2
```

### 3. Add components:

```bash
npx moxaui@latest add button
npx moxaui@latest add input
```

## 🎬 Quick Start

```tsx
import { View } from 'react-native';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-background">
      <View className="w-full space-y-4">
        <Input placeholder="Email" className="bg-background" />
        <Button variant="default" className="w-full" onPress={() => {}}>
          Sign In
        </Button>
      </View>
    </View>
  );
}
```

## 🏗 Components (In Progress)

### Form Components
- Button
- Input
- Select
- Checkbox
- Radio Group
- Switch
- Textarea

### Layout
- View
- ScrollView
- SafeAreaView
- KeyboardAvoidingView

### Data Display
- Avatar
- Badge
- Card
- Carousel
- List
- Table

### Feedback
- Alert
- Progress
- Spinner
- Toast
- Modal
- BottomSheet

### Navigation
- Tabs
- SegmentedControl
- Menu
- NavigationBar

## 🔧 CLI Usage

```bash
# Add a single component
npx moxaui@latest add button

# Add multiple components
npx moxaui@latest add button card avatar

# Add a component with style variants
npx moxaui@latest add button --variant=outline,ghost
```

## 📅 Project Status

- [x] Core Architecture Design
- [x] NativeWind Integration
- [x] Component API Design
- [ ] CLI Development
- [ ] Alpha Release (Coming Q1 2024)
- [ ] Documentation Site
- [ ] Component Gallery

## 🤝 Contributing

Want to help? You can:

1. ⭐ Star the repo
2. Join our [Discord](https://discord.gg/moxaui)
3. Follow us on [Twitter](https://twitter.com/moxaui)
4. Join the waitlist at [moxaui.com](https://moxaui.com)

## 📝 License

Moxa UI is licensed under the [MIT License](https://github.com/princeajuzie7/moxa-ui/blob/main/LICENSE.md).

