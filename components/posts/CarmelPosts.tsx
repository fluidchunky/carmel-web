import React from 'react';
import { InfiniteScrollComponent } from '~/elements';
import { ListPlaceholder } from '~/components/placeholders/ListPlaceholder';
import { CarmelPostCard } from '~/components/cards'

export const CarmelPosts = ({ posts }: any) => {
  if (!posts || posts.length === 0) {
    return <div/>
  }
  
  return (
    <div className='w-full'>
    <InfiniteScrollComponent
      renderItem={posts.map((element: any, elementId: any) => <CarmelPostCard 
        key={elementId} 
        onPress={() => {}}
         {...element} 
      />)}
      elementsNumber={3}
      loader={<ListPlaceholder />}
    />
    </div>
  )
}