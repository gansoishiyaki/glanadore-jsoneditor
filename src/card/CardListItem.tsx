import { Card } from '../model/card'

interface CardListItemProps {
  card: Card
}

export default function CardListItem(props: CardListItemProps) {
  return (
    <div>
      {props.card.id}: {props.card.title}
    </div>
  )
}