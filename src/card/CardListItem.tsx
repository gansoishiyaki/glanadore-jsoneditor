import { Card } from '../model/card'

interface CardListItemProps {
  card: Card
}

export default function CardListItem(props: CardListItemProps) {
  return (
    <tr>
      <td className='border px-4 py-2'>
        {props.card.id}
      </td>
      <td className='border px-4 py-2'>
        {props.card.title}
      </td>
    </tr>
  )
}