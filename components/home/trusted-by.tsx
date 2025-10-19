import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Star } from "lucide-react";


const avatars = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
    fallback: "OS",
    name: "Olivia Sparks",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png",
    fallback: "HL",
    name: "Howard Lloyd",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
    fallback: "HR",
    name: "Hallie Richards",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png",
    fallback: "JW",
    name: "Jenny Wilson",
  },
];

export function TrustedBy() {
  return (
    <div className="flex items-center justify-center my-12 gap-4">
      {/* Avatares empilhados */}
      <div className="flex -space-x-3 [&>span]:size-8 ">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className="ring-background ring-2">
            <AvatarImage src={avatar.src} alt={avatar.name} />
            <AvatarFallback className="text-xs">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Texto */}
      <p className="text-xs text-muted-foreground font-medium">
        Trusted by 200+ users
      </p>

      {/* Avaliação em estrelas */}
      <div className="flex items-center ">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400" />
        ))}
      </div>
    </div>
  );
}