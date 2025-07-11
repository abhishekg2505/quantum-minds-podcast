export default async function sitemap() {
  const baseUrl = "https://quranium.org";
  const lastModified = new Date("2024-09-16T05:16:32+00:00");
  const staticMap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dequip`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quantum-minds-podcast`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/the-uncrackable-conversation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/next-gen-innovators`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/quantum-security-awareness-day`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layers-and-lattes`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // const url = `${process.env.BASE_URL}/api/blogs`;
  // const response = await fetch(url);
  // console.log("response" , response)
  // const { data } = await response.json();

  // const blogSiteMaps = data.map((blog) => ({
  //   url: `${baseUrl}/api/blogs/${blog?.attributes?.slug}`,
  //   lastModified: blog?.attributes?.updatedAt,
  // }));

  const siteMaps = [...staticMap, ...[]];
  return siteMaps;
}
