import ReactMarkdown from 'react-markdown'

export default function GetRecipe(props){
    return( <section>
            
       <article className="suggested-recipe-container" aria-live="polite">
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </article>
            </section>)


}