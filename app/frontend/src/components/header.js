import { Github, LampDeskIcon } from 'lucide-react'
import { Separator } from "../components/ui/separator"
import { Button } from "../components/ui/button"

export default function Header() {

  return (
    <header className="px-6 py-3 flex items-center justify-between border-b-2">

    <h1 className="text-xl font-bold flex items-center">
      <LampDeskIcon 
        className="w-6 h-6 mr-2"
      />
      PHCA.dev
    </h1>

    <h1 className="text-xl font-bold">SuperMarket App</h1>
    <a href='https://github.com/dropeko' target='_blank'>
      <div className="flex items-center gap-3">
        <Button variant="secondary">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </Button>
      </div>
    </a>
    </header>

  )
}