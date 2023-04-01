import { useEffect, useState } from 'react'
import { Card } from '../model/card'
import CardListItem from './CardListItem'

interface CardListProps {
  data: any[]
}

export default function CardList(props: CardListProps) {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    const list = props.data.map(card => (
      new Card(card)
    ))
    setCards(list)
  }, [])

  return (
    <div>
      {
        cards.map((item, index) => (
          <CardListItem key={item.id} card={item}></CardListItem>
        ))
      }
    </div>
  )
}