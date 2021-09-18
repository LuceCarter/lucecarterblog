import { Config } from "@utils/Config";
import PageMeta from "@components/PageMeta";
import ContentfulApi from "@utils/ContentfulApi";
import RichTextPageContent from "@components/RichTextPageContent";
import MainLayout from "@layouts/main";
import HeroBanner from "@components/HeroBanner";
import ContentWrapper from "@components/ContentWrapper";
import PageContentWrapper from "@components/PageContentWrapper";
import UsesEntry from "@components/UsesEntry";

export default function Uses(props) {
  const { pageContent, toolNames } = props;

  const pageTitle = pageContent ? pageContent.title : "Uses"; 

  const pageDescription = pageContent
    ? pageContent.description
    : "Tools and Techniques that I use!";

  return (
    <>
      <MainLayout>
        <PageMeta
          title={pageTitle}
          description={pageDescription}
          url={Config.pageMeta.home.url}
        />

        {pageContent && pageContent.heroBanner !== null && (
          <HeroBanner data={pageContent.heroBanner} />
        )}

        <ContentWrapper>
          {pageContent && pageContent.body && (
            <PageContentWrapper>
              <RichTextPageContent richTextBodyField={pageContent.body} />             
            </PageContentWrapper>
          )}
          <UsesEntry toolNames={toolNames} />           
        </ContentWrapper>                               
      </MainLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const pageContent = await ContentfulApi.getPageContentBySlug(
    Config.pageMeta.home.slug,
    {
      preview: preview,
    },
  );

  const toolNames = await ContentfulApi.getAllUsesEntries();
  
  return {
    props: {
      preview,
      pageContent: pageContent || null,
      toolNames
    },
  };
}
