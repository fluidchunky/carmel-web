import React from 'react';
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelCommentCard } from '~/components/cards'

export const CarmelPostComments = ({ comments, carmelId, auth }: any) => {
  if (!comments || comments.length === 0) {
    return <div/>
  }

  const showComments = () => {
    return comments.sort((a: any, b: any) => b.updatedOn - a.updatedOn).map((element: any, elementId: any) => <CarmelCommentCard 
        key={`${elementId}`} 
        onPress={() => {}}
        auth={auth}
        carmelId={carmelId}
         {...element} 
    />)
  }

  return (
    <InfiniteScrollComponent
      renderItem={showComments()}
      elementsNumber={1000}
      loader={<ListPlaceholder />}
    />
  )
}