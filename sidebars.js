module.exports = {
  docs: [
    "main",
    {
      type: "category",
      label: "I.C.R",
      items: ["icr/resolucion-tv-monitor27"],
    },
    {
      type: "category",
      label: "Control Remoto",
      items: [
        {
          type: "category",
          label: "Antenas",
          items: [
            "remote-control/antenas/parametros",
            {
              type: "category",
              label: "Modelos",
              items: [
                "remote-control/antenas/modelos/powerbeanM5400"
              ]
            }
          ],
        },
        "remote-control/camaras",
        "remote-control/app",
      ],
    },
    {
      type: "category",
      label: "Docusaurus Tutorial",
      items: [
        "docusaurus/getting-started",
        "docusaurus/create-a-page",
        "docusaurus/create-a-document",
        "docusaurus/create-a-blog-post",
        "docusaurus/markdown-features",
        "docusaurus/thank-you",
      ],
    },
  ],
};
