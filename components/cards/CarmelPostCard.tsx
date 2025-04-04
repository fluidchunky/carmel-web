import { useState } from 'react' 
import { readexPro } from '~/elements/fonts'
import { PostAuthor } from '~/elements';
import { CarmelPostComments } from '~/components/posts'
import { CommentButton, CommentBox, Chunky, RatingBadge, PostText, DynamicIcon } from '~/elements'
import { getImageUrl } from '~/utils/main';

export const CarmelPostCard = ({ 
  text,
  auth,
  highlight,
  currentComment,
  carmelId,
  ogComment,
  replying,
  loading,
  authorImage,
  author,
  updatedOn,
  postId,
  editing,
  parentId,
  rating,
  community,
  onReply,
  onCancelEdit,
  onEdit,
  comments
}: any) => {    
  
  const [showComments, setShowComments] = useState(false)

  const onToggleComments = () => {
    setShowComments(!showComments)
  }

  const subposts = () => comments ? comments.filter((p: any) => p) : []

    const CardAuthor = () => {
      return <div className='flex flex-row'>
              <PostAuthor
                image={getImageUrl(author)}
                updatedOn={updatedOn}
                username={author}/>
        </div>
    }

    const MainAction = () => {
      if (auth && !auth.isLoggedIn()) {
        return <div/>
      }
      
      if (loading) {
        return <div className="mt-4 pl-14 w-full flex flex-col gap-4">
              <div className={`h-5 w-32 bg-cyan/40 animate-pulse`}></div>
              <div className={`h-5 w-56 bg-cyan/40 animate-pulse`}></div>
              <div className={`h-5 w-48 bg-cyan/40 animate-pulse`}></div>
              </div>
      }

      if (editing || replying) {
        return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
                  <div className='m-1'>
                    <Chunky/>
                  </div>
              <CommentBox onCancel={onCancelEdit} name="comment" text={ogComment} placeholder={`What do you think? Add a thoughtful comment to this post.`}/>
          </div>
      }

      const hasComments = subposts().length > 0

      return <div className="mt-4 pl-14 w-full flex flex-row gap-4">
            { highlight && <CommentButton title="Edit" onPress={onEdit} icon="PencilSquareIcon"/> }
            <CommentButton title="Reply" onPress={onReply} icon="ChatBubbleLeftIcon"/>
            { hasComments && <button className='text-md mt-2 text-primary flex flex-row' onClick={onToggleComments}>        
                  { `${subposts().length} comments` }
                  <DynamicIcon name={showComments ? 'ChevronUpIcon' : 'ChevronDownIcon'} width={20} height={20} className='ml-1 text-primary'/>
              </button> }
        </div>
    }

    return <div className={`flex flex-col justify-start relative w-full ${highlight ? 'bg-primary/20' : 'bg-primary/5'} mb-4 border border-primary/20`}>
        
        <div className="flex flex-col p-4 leading-normal text-left w-full">
          <CardAuthor/>
          { loading || editing || <div className={`${readexPro.className} mb-3 text-lg font-thin text-gray-400 2xl:w-5/6 mt-4 pl-14 flex flex-col`}>
               { rating && <RatingBadge {...rating}/> }
               <PostText text={text}/>
            </div>     
          }
          <MainAction/>
        </div>
        { showComments && <CarmelPostComments carmelId={carmelId} auth={auth} comments={subposts()}/> }
    </div>
}