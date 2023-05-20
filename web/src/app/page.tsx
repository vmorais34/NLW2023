import { User } from 'lucide-react'

import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="flex flex-col items-start justify-between px-20 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

        {/* Stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes"></div>
        
        {/* Signin */}
        <a href="" className="flex items-center gap-3 text-left transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas memórias!
          </p>
        </a>
        
        {/* Hero */}
        <div className="space-y-5 ">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg  leading-relaxed">
              Colecione momentos marcantas da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>
          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading none text-black hover:bg-green-600 transition-colors" href="">Cadastrar Lembrança</a>
        </div>

        {/* Footer/Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}<a target="_blank" rel="noopener" className="underline hover:text-gray-100" href="https://rocketseat.com.br">Rocketseat</a>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center w-[360px]">        
          <p className="text-center leading-relaxed">Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">criar agora</a>
          !
          </p>
        </div>
      </div>
    </main>
  )
}
