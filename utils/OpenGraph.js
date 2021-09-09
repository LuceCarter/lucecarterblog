/*
 * Open Graph meta tags are used in the <head> of an HTML page to expose
 * information about your web page to social media platforms and other applications
 * that unfurl URL meta data.
 *
 * This is an Open Graph meta tag that provides a url to an image that is used to represent the web page.
 * <meta property="og:image" content="https://example.com/image.png" />
 *
 * You can find all Open Graph meta tags in @components/PageMeta.
 *
 * The example code uses a serverless service that generates dynamic Open Graph
 * images that you can embed in your <meta> tags.
 *
 * View the code here: https://github.com/vercel/og-image
 *
 * Explore the application in the UI here: https://og-image.vercel.app/
 */

const CLOUD_NAME = "luce-carter-blog";
const IMG_WIDTH = 831;
const IMG_HEIGHT = 466;

function cleanText(text) {  
  var spacedString = encodeURIComponent(text).replace(/-/g, " ");
  return spacedString.charAt(0).toUpperCase().slice(1);
}

export default class OpenGraph {
  static generateImageUrl({
    title,
    imagePublicID = "post_template.png",
    cloudinaryUrlBase = "https://res.cloudinary.com",
    imageWidth = IMG_WIDTH,
    imageHeight = IMG_HEIGHT,
    textAreaWidth = 760,

    titleFont = "worksans",
    titleGravity = "south_west",
    titleBottomOffset = 100,
    titleLeftOffset = 50,
    titleColor = "ffffff",
    titleFontSize = 100,

    version = null,
  }) {

    const imageConfig = [
      `w_${imageWidth}`,
      `h_${imageHeight}`,
      "c_fill",
      "q_auto",
      "f_auto",
      "r_20",
    ].join(",");

    const titleConfig = [
      `w_${textAreaWidth}`,
      "c_fit",
      `co_rgb:${titleColor}`,
      `g_${titleGravity}`,
      `x_${titleLeftOffset}`,
      `y_${titleBottomOffset}`,
      `l_text:${titleFont}_${titleFontSize}:${cleanText(title)}`,
    ].join(",");

    const urlParts = [
      cloudinaryUrlBase,
      CLOUD_NAME,
      "image",
      "upload",
      imageConfig,
      titleConfig,
      version,
      imagePublicID,
    ]

    console.log(urlParts.filter(Boolean));
    // remove any falsy sections of the URL (e.g. an undefined version)
    return urlParts.filter(Boolean);

  }
}
