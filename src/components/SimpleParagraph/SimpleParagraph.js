import './SimpleParagraph.scss'

const SimpleParagraph = ({ text }) => {
    const cssBaseName = "simple-paragraph"
    return (
        <div className={cssBaseName}>
            <p className={cssBaseName + '-text'}>
                {text}
            </p>
        </div>
    )
}

export default SimpleParagraph;