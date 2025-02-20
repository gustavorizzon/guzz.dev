import { Code2, Github, Terminal } from "lucide-react";
import { Metadata } from "next";
import { Navbar } from "./_components/navbar";
import { Button } from "@/components/ui/button";
import { CommandTile } from "./_components/command-tile";
import { CodeBlock } from "./_components/code-block";

export const metadata: Metadata = {
  title: "psnm | Powershell Simple Node Manager",
};

async function fetchScriptContent() {
  const scriptContent = await fetch(
    "https://raw.githubusercontent.com/gustavorizzon/psnm/refs/heads/main/psnm.ps1"
  ).then((response) => response.text());

  return scriptContent;
}

const SCRIPT_CREATE_ALIAS = `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser\nif (-not (Test-Path $profile)) { New-Item $profile -Force }\nAdd-Content -Path $profile -Value "Set-Alias psnm $HOME\\.psnm\\psnm.ps1"`;

export default async function ScriptLanding() {
  const scriptContent = await fetchScriptContent();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-16">
        <section id="home" className="py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-powershell-text [text-shadow:0_0_20px_rgba(238,237,240,0.3)]">
                  Powershell Simple Node Manager
                </h1>
                <p className="mx-auto max-w-[700px] text-powershell-text/80 md:text-xl">
                  Lightweight tool for managing Node.js versions via PowerShell,
                  even with limited permissions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  className="gap-2 bg-powershell-accent hover:bg-powershell-accent/90 hover:[box-shadow:0_0_15px_rgba(0,120,212,0.5)]"
                >
                  <a href="#installation">
                    <Terminal className="size-4" />
                    Instalation Guide
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="gap-2 border-powershell-text/20 hover:bg-powershell-text/10 hover:border-powershell-command hover:[box-shadow:0_0_15px_rgba(239,181,113,0.3)]"
                  asChild
                >
                  <a
                    href="https://github.com/gustavorizzon/psnm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="commands" className="py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-powershell-text [text-shadow:0_0_15px_rgba(238,237,240,0.3)]">
                Commands
              </h2>
              <p className="max-w-[700px] text-powershell-text/80 md:text-xl">
                Simple and powerful commands to help you get things done faster.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <CommandTile
                label="install"
                fullCommand="psnm install <version>"
                description="Installs the specified version of Node.js on your system."
              />
              <CommandTile
                label="remove"
                fullCommand="psnm remove <version>"
                description="Removes the specified version of Node.js from your system."
              />
              <CommandTile
                label="use"
                fullCommand="psnm use <version>"
                description="Switches to the specified version of Node.js."
              />
              <CommandTile
                label="ls-remote"
                fullCommand="psnm ls-remote"
                description="Lists all available versions of Node.js."
              />
              <CommandTile
                label="ls"
                fullCommand="psnm ls"
                description="Lists all installed versions of Node.js."
              />
            </div>
          </div>
        </section>

        <section id="installation" className="py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[58rem] space-y-12">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-powershell-text [text-shadow:0_0_15px_rgba(238,237,240,0.3)]">
                  Installation Guide
                </h2>
                <p className="mx-auto max-w-[700px] text-powershell-text/80 md:text-xl">
                  Follow these simple steps to get started with the script.
                </p>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-powershell-text">
                    1. Create the script file
                  </h3>
                  <p className="text-powershell-text/70">
                    Create a new file named{" "}
                    <code className="rounded bg-muted px-1 text-powershell-command">
                      psnm.ps1
                    </code>{" "}
                    in your desired location, or simply execute the command
                    below to create it automatically:
                  </p>
                  <CodeBlock
                    code="New-Item $HOME\.psnm\psnm.ps1 -Force"
                    language="powershell"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-powershell-text">
                    2. Open, copy, paste & save
                  </h3>
                  <p className="text-powershell-text/70">
                    Open the new file you just created, copy and paste the
                    script into the file. Remember to save.
                  </p>
                  <CodeBlock
                    code={scriptContent}
                    language="powershell"
                    className="h-96"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-powershell-text">
                    3. Create an alias
                  </h3>
                  <p className="text-powershell-text/70">
                    Add an entry to your PowerShell profile to create an alias
                    for the PowerShell Simple Node Manager:
                  </p>
                  <CodeBlock code={SCRIPT_CREATE_ALIAS} language="powershell" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-powershell-text">
                    4. Test
                  </h3>
                  <p className="text-powershell-text/70">
                    Restart your PowerShell session and test the psnm command to
                    ensure it works correctly.
                  </p>
                  <CodeBlock code={`psnm ls-remote`} language="powershell" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <hr className="border-t border-powershell-text/20" />
      <footer className="py-6 text-center flex items-center justify-center gap-2 bg-muted">
        <Code2 className="size-6" />
        <p className="text-sm text-powershell-text/70">
          Built with ❤️, ⚡ and 🤖 by{" "}
          <a
            href="https://github.com/gustavorizzon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gustavo
          </a>
          . Open source under MIT license.
        </p>
      </footer>
    </div>
  );
}
