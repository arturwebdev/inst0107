export const ignorEmptyComment = () => (next) => (action) => {
    if((action.type === 'posts/addComment' && action.payload.text.replaceAll(' ', '' )) || action.type !== 'posts/addComment' ){
        next(action)
    }
}