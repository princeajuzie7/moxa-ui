
```markdown
<p align="center">
  <a href="https://moxaui.dev">
    <img width="180" src="https://raw.githubusercontent.com/moxaui/moxaui/main/assets/logo.png" alt="Moxa UI logo">
  </a>
</p>

# Moxa UI

<p align="center">
  Re-usable components built with <a href="https://nativewind.dev">NativeWind</a> and <a href="https://reactnative.dev">React Native</a>.
</p>

<p align="center">
  An open source UI component library inspired by shadcn/ui but for React Native.
</p>

<p align="center">
  <a href="https://moxaui.dev/docs"><strong>Documentation (Coming Soon)</strong></a>
  ·
  <a href="https://github.com/moxaui/examples"><strong>Examples</strong></a>
  ·
  <a href="https://discord.gg/moxaui"><strong>Discord</strong></a>
</p>

<p align="center">
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/moxaui/moxaui?style=for-the-badge&color=gold&labelColor=black"/>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge&color=blue&labelColor=black"/>
  <img alt="Build Status" src="https://img.shields.io/badge/status-coming%20soon-orange?style=for-the-badge&labelColor=black"/>
</p>

## About

Moxa UI provides beautifully designed components that you can copy and paste into your React Native apps. Built with NativeWind and inspired by shadcn/ui's architecture.

- ✅ Styled with NativeWind (Tailwind CSS)
- ✅ Mobile-first and accessible components
- ✅ Copy, paste and customize
- ✅ CLI for easy installation
- ✅ TypeScript support
- ✅ Dark mode ready

## Installation (Coming Soon)

1. Create a new React Native project:

```bash
npx create-react-native-app@latest my-app -t @moxaui/template
cd my-app
```

2. Install dependencies:


```shellscript
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
```

3. Add components:


```shellscript
npx moxaui@latest add button
npx moxaui@latest add input
```

## Quick Start

```typescriptreact
import { View } from 'react-native'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-background">
      <View className="w-full space-y-4">
        <Input 
          placeholder="Email"
          className="bg-background"
        />
        <Button 
          variant="default"
          className="w-full"
          onPress={() => {}}
        >
          Sign In
        </Button>
      </View>
    </View>
  )
}
```

## Components

Here's what we're working on. More components coming soon.

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


## Example

Here's a more complex example showing a profile card component:

```typescriptreact
import { View, Text } from 'react-native'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfileCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <View>
          <Text className="font-semibold">John Doe</Text>
          <Text className="text-sm text-muted-foreground">@johndoe</Text>
        </View>
      </CardHeader>
      <CardContent>
        <Text className="text-muted-foreground">
          Building beautiful mobile experiences with React Native and Moxa UI.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" size="sm">
          Follow
        </Button>
      </CardFooter>
    </Card>
  )
}
```

## CLI Usage

Use the Moxa UI CLI to add components to your project:

```shellscript
# Add a single component
npx moxaui@latest add button

# Add multiple components
npx moxaui@latest add button card avatar

# Add a component with style variants
npx moxaui@latest add button --variant=outline,ghost
```

## Project Status

- Core Architecture Design
- NativeWind Integration
- Component API Design
- CLI Development
- Alpha Release (Coming Q1 2024)
- Documentation Site
- Component Gallery


## Contributing

While we're preparing for our initial release, you can:

1. Star the repository to show your support
2. Join our [Discord](https://discord.gg/moxaui) community
3. Follow us on [Twitter](https://twitter.com/moxaui)
4. Sign up for our newsletter at [moxaui.dev](https://moxaui.dev)


## Credits

- Inspired by [shadcn/ui](https://ui.shadcn.com)
- Built with [NativeWind](https://nativewind.dev)
- Icons from [Lucide](https://lucide.dev)


## License

Licensed under the [MIT license](https://github.com/moxaui/moxaui/blob/main/LICENSE.md).

---

[

](https://moxaui.dev) 

[

](https://twitter.com/moxaui) 

[

](https://discord.gg/moxaui)

`<sub>`Built with ❤️ by the Moxa UI team`</sub>`



```plaintext

Key changes made:
1. Replaced HTML `<div>` tags with Markdown-friendly `<p>` tags
2. Moved the main title to a proper Markdown `#` heading
3. Added a placeholder for the logo image
4. Improved alignment and spacing
5. Maintained all the content but with better GitHub compatibility

Would you like me to adjust anything else in the README?
```