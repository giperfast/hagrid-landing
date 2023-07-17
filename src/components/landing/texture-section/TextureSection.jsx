import classNames from "classnames";
import classes from './TextureSection.module.css';
import parse from "html-react-parser";

function Title({main, title}) {
    const Tag = main === true ? 'h1' : 'h2';
    const main_class = main === true ? classes.title__main : '';
    return <Tag className={classNames(classes.title, main_class)}>{title}</Tag>
}

function Description({main, description}) {
    const main_class = main === true ? classes.description__main : ''

    if (Array.isArray(description)) {
        var description_tags = '';
        
        description.map((value, index) => {
            description_tags += value;
            return true;
        })
        return <h3 className={classNames(classes.description, main_class)} dangerouslySetInnerHTML={{ __html: description_tags }}></h3>
    }
    return <h3 className={classNames(classes.description, main_class)}>{parse(description)}</h3>
}

function TextureSection({children, title, description, color = '#ffffff', main = false, id}) {
    const classPadding = main === true ? classes.paddingSmall : '';
    
    return (
        <section style={{backgroundColor: color}} className={classNames(classes.section, classPadding)}>
            <div class="anchor_target" id={id}></div>
            <Title main={main} title={title}/>
            <Description main={main} description={description}/>
            {children}
        </section>
    );
}

export default TextureSection;