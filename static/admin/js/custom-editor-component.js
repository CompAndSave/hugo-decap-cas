/* ACCORDION */
const accordionTemplate = (data) => `{{< details "${data.heading}" >}}${data.content}{{< /details >}}`;

const Accordion = {
  id: "accordion",
  label: "Accordion",
  fields: [
    {
      name: "heading",
      label: "Heading",
      widget: "string",
      required: true
    },
    {
      name: "content",
      label: "content",
      widget: "markdown",
      required: true
    },
  ],
  pattern: /^{{< details "(.*?)" >}}(.*?){{< \/details >}}/,
  fromBlock: (match) => {
    return {
        heading: match[1],
        content: match[2],
    };
  },
  toBlock: (data) => accordionTemplate(data),
  toPreview: (data) => {
    if (data.heading) {
      return `
      <details>
  <summary>${data.heading}</summary>
  ${data.content}
</details>`
    }
  }
};

/* YOUTUBE */
const YoutubeEmbed = {
  id: "youtubeEmbed",
  label: "Youtube",
  fields: [
    {
      name: "videoId",
      label: "Video ID",
      widget: "string",
      required: true
    },
    {
      name: "videoTitle",
      label: "Video Title",
      widget: "string",
      required: true
    },
  ],
  pattern: /^{{< youtubeLazyload id="(.*)" title="(.*)" >}}/,
  fromBlock: (match) => {
    return {
      videoId: match[1],
      videoTitle: match[2],
    };
  },
  toBlock: (data) => `{{< youtubeLazyload id="${data.videoId}" title="${data.videoTitle}" >}}`,
  toPreview: (data) => {
    if(data.videoId && data.videoTitle) {
        return `
        <div class="responsive-embed widescreen">
        <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/${data.videoId}"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${data.videoId}><img src=https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg alt='${data.videoTitle}'><span>▶</span></a>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="${data.videoTitle}"
            ></iframe>
    </div>`;
    }
  }
};

/* IMAGE WITH LINK */
const ImageWithLink = {
  label: "Image",
  id: "imageWithLink",

  fromBlock: (match) =>
    match && {
      image: match[2],
      alt: match[1],
      title: match[4]
    },

  toBlock: ({ alt, image, title }) =>
    `[![${alt || ""}](${image || ""}${
      title ? ` "${title.replace(/"/g, '\\"')}"` : ""
    })](${image || ""})`,

  toPreview: ({ alt, image, title }, getAsset, fields) => {
    const imageField = fields?.find((f) => f.get("widget") === "image");
    const src = getAsset(image, imageField);
    return `<a target="_blank" href="${image || ""}" class="no-border"><img src="${src || ""}" alt="${alt || ""}" title="${title || ""}" /></a>`;
  },

  pattern: /^\[!\[(.*)\]\((.*?)(\s"(.*)")?\)\]\((.*?)(\s"(.*)")?\)$/,
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: "Alt text",
      name: "alt",
      required: true
    },
    {
      label: "Title",
      name: "title",
    }
  ]
};

CMS.registerEditorComponent(ImageWithLink);
CMS.registerEditorComponent(Accordion);
CMS.registerEditorComponent(YoutubeEmbed);
