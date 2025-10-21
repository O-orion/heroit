import React from 'react'
import Card from '../card/Card'
import { User, BookOpen, TrendingUp } from 'lucide-react'

function ListInfoLab() {
  return (
    <div className="grid grid-cols-3 gap-4">
        <Card title='Total de Alunos' value={10} icon={<User />} color='text-blue-400' />
        <Card title='Total de Alunos' value={10} icon={<BookOpen />} color='text-green-400'/>
        <Card title='Total de Alunos' value={10} icon={<TrendingUp />} color='text-yellow-400' />
    </div>
  )
}

export default ListInfoLab