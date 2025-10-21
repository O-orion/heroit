import React from 'react'
import Card from '../../ui/card/Card'
import { BookOpen, TrendingUp, User } from 'lucide-react'

function HomePage() {
  return (
    <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
            <Card title='Total de Alunos' value={10} icon={<User />} color='text-blue-400' />
            <Card title='Total de Alunos' value={10} icon={<BookOpen />} color='text-green-400'/>
            <Card title='Total de Alunos' value={10} icon={<TrendingUp />} color='text-yellow-400' />
        </div>
    </div>
  )
}

export default HomePage