import RichTextPageContent from "@components/RichTextPageContent";
import Link from "next/link";
import Image from "next/legacy/image";
import UsesEntryStyles from "@styles/UsesEntry.module.css";
import ButtonStyles from "@styles/Button.module.css";

export default function UsesEntry(props) {
    const { toolNames } = props;

    return (
        <div className={UsesEntryStyles.entryContainer}>
           {toolNames.map(tool => (
               <div className={UsesEntryStyles.entry}>
                <div className={UsesEntryStyles.toolNameHeader}>
                <Image src={tool.toolIcon.url} alt={tool.toolIcon.description} width='50' height='50' />
                    <h2>{tool.name}</h2>                   
                </div>               
                <RichTextPageContent richTextBodyField={tool.description} />
                <Link legacyBehavior  href={tool.toolUrl}>
                    <a className={ButtonStyles.button}>Learn More...</a>
                </Link>               
               </div>
           ))}
        </div>        
    );
}