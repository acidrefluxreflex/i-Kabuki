import { HStack } from "@kuma-ui/core";
import ShareButtons from "@/components/shared/ShareButtons"; 


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return  (<HStack>
    
        {children}
        </HStack>);
  }
  