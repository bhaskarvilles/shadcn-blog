import { Metadata } from "next";
import Image from "next/image";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Separator } from "@/components/ui/separator";
import { getGravatarUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About | Ram&apos;s Website",
  description: "Explore cutting-edge tech, geopolitics, ethical hacking, activism, and humanity&apos;s future.",
};

export default function AboutPage() {
  const gravatarEmail = "bhaskarvilles@gmail.com";
  const avatarUrl = getGravatarUrl(gravatarEmail, 400);
  
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto py-4 sm:py-6">
        <section className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            About
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-[42rem]">
            Welcome to my corner of the internet where I decode the intersection of technology, geopolitics, and human progress.
          </p>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <p className="mb-3 sm:mb-4 text-muted-foreground text-sm sm:text-base">
                As a Tech Analyst & Geopolitical Observer, I&apos;m passionate about exploring the complex relationships between technology, global politics, and social change.
              </p>
              <p className="mb-3 sm:mb-4 text-muted-foreground text-sm sm:text-base">
                This platform exists to share insights about cutting-edge tech, geopolitical developments, ethical hacking, activism, and our collective future.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                I believe in the power of knowledge and aim to create content that challenges conventional thinking while remaining accessible and informative.
              </p>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image 
                  src={avatarUrl} 
                  alt="Author Profile" 
                  fill 
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 sm:my-12" />

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">About Me</h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full mb-3 sm:mb-4">
                <Image
                  src={avatarUrl}
                  alt="Bhaskar Ram"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 96px, 128px"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">Bhaskar Ram</h3>
              <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">Tech Analyst & Geopolitical Observer</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a href="https://github.com/bhaskarvilles" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-muted rounded-full text-xs">GitHub</a>
                <a href="https://twitter.com/bhaskarvilles" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-muted rounded-full text-xs">Twitter</a>
                <a href="https://linkedin.com/in/bhaskarvilles" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-muted rounded-full text-xs">LinkedIn</a>
                <a href="https://t.me/bhaskarvilles" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-muted rounded-full text-xs">Telegram</a>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8 sm:my-12" />

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Mission</h2>
          <div className="bg-muted p-4 sm:p-6 rounded-lg">
            <p className="text-base sm:text-lg font-medium text-center">
              &quot;To decode the intersection of technology, geopolitics, and human progress through in-depth analysis and critical thinking.&quot;
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-6 sm:mt-8">
            <div className="bg-card p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Tech</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Analyzing cutting-edge technologies and their implications for society, security, and our future.
              </p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Geopolitics</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Exploring the complex dynamics of international relations, power structures, and global challenges.
              </p>
            </div>
            <div className="bg-card p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Activism</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Advocating for digital rights, privacy, and ethical approaches to technology development and implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect</h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Feel free to reach out through any of my social platforms or via email at <a href="mailto:bhaskarvilles@duck.com" className="underline hover:text-primary">bhaskarvilles@duck.com</a>
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Tech, geopolitics, hacks, truths, activism, and humanity&apos;s future explored anonymously.
          </p>
        </section>
      </div>
    </LayoutWrapper>
  );
} 