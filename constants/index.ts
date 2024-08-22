const authorId = process.env.NEXT_PUBLIC_CLERK_ID;

console.log(authorId);
export const sidebarLinks = [
  {
    imgURL: "assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "assets/icons/discover.svg",
    route: "/discover",
    label: "Discover",
  },
  {
    imgURL: "assets/icons/microphone.svg",
    route: "/create-podcast",
    label: "Create Podcast",
  },
  // {
  //   imgURL: "assets/icons/profile.svg",
  //   route: "/profile",
  //   label: "Profile",
  // },
];

export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
  },
  {
    id: 2,
    name: "echo",
  },
  {
    id: 3,
    name: "fable",
  },
  {
    id: 4,
    name: "onyx",
  },
  {
    id: 5,
    name: "nova",
  },
  {
    id: 6,
    name: "shimmer",
  },
];

export const podcastData = [
  {
    _id: 1,
    title: "The Joe Rogan Experience",
    podcastDescription: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
  },
  {
    _id: 2,
    title: "The Futur",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
  },
  {
    _id: 3,
    title: "Waveform",
    podcastDescription: "Join Michelle Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
  },
  {
    _id: 4,
    title: "The Tech Talks Daily Podcast",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
  },
  {
    _id: 5,
    title: "GaryVee Audio Experience",
    podcastDescription: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
  },
  {
    _id: 6,
    title: "Syntax ",
    podcastDescription: "Join Michelle Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
  },
  {
    _id: 7,
    title: "IMPAULSIVE",
    podcastDescription: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
  },
  {
    _id: 8,
    title: "Ted Tech",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
  },
];

export const similarTestPodcasts = [
  {
    _id: 2,
    title: "The Futur",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
    userImg: "/assets/images/the-futur.png",
    authorName: "Chris Do",
    voicePrompt:
      "Deliver the news in a calm and authoritative voice, with clear enunciation and a measured pace. The voice should be trustworthy and professional, giving listeners a sense of assurance and clarity.",
    imagePrompt:
      "Create a graphic that embodies the concept of modern news. Use elements such as a digital newspaper or a futuristic newsroom setting, with a sleek and minimalist design.",
  },
  {
    _id: 3,
    title: "Waveform",
    description: "Join Michelle Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
    userImg: "/assets/images/waveform.png",
    authorName: "Marques Brownlee",
    voicePrompt:
      "The conversation should be lively and engaging, with a friendly and personable tone. The voice should be warm and inviting, making listeners feel as if they are part of the discussion.",
    imagePrompt:
      "Design an image that represents a high-profile conversation. Include visuals of microphones, waveforms, and a vibrant color palette that conveys energy and excitement.",
  },
  {
    _id: 4,
    title: "The Tech Talks Daily Podcast",
    description: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
    userImg: "/assets/images/tech-talks-daily.png",
    authorName: "Neil Hughes",
    voicePrompt:
      "Provide a clear and concise narration that is informative and insightful. The voice should be professional and articulate, offering a straightforward delivery of the latest tech news and insights.",
    imagePrompt:
      "Create a cover image that illustrates the daily updates in technology. Use icons representing gadgets, software, and data, with a clean and modern design.",
  },
  {
    _id: 5,
    title: "GaryVee Audio Experience",
    description: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
    userImg: "/assets/images/garyvee.png",
    authorName: "Gary Vaynerchuk",
    voicePrompt:
      "Narrate with a passionate and motivational tone, suitable for an audience seeking business and personal development advice. The voice should be energetic and inspiring, with a focus on storytelling and actionable insights.",
    imagePrompt:
      "Design a visual that captures the essence of business and entrepreneurship. Include elements such as graphs, charts, and dynamic typography, with a bold and confident look.",
  },
  {
    _id: 6,
    title: "Syntax",
    description: "Join Michelle Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
    userImg: "/assets/images/syntax.png",
    authorName: "Wes Bos & Scott Tolinski",
    voicePrompt:
      "Engage in a dialogue that is technical yet approachable, ideal for developers and tech enthusiasts. The voice should be knowledgeable and enthusiastic, offering detailed explanations and practical advice.",
    imagePrompt:
      "Create a cover that reflects the theme of coding and web development. Incorporate visuals of code snippets, browsers, and responsive design, with a vibrant and modern aesthetic.",
  },
  {
    _id: 7,
    title: "IMPAULSIVE",
    description: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
    userImg: "/assets/images/impaulsive.png",
    authorName: "Logan Paul",
    voicePrompt:
      "Narrate in a bold and candid style, capturing the spontaneity and humor of the podcast. The voice should be charismatic and lively, drawing listeners into the conversation.",
    imagePrompt:
      "Illustrate a theme that represents candid discussions and entertainment. Use graphics of a studio setting, microphones, and vibrant colors, with a playful and engaging design.",
  },
  {
    _id: 8,
    title: "Ted Tech",
    description: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
    userImg: "/assets/images/ted-tech.png",
    authorName: "TED",
    voicePrompt:
      "Deliver the content in an insightful and thought-provoking manner, appealing to an audience interested in technology and innovation. The voice should be clear and engaging, with a focus on explaining complex ideas in an accessible way.",
    imagePrompt:
      "Design an image that showcases innovative technology. Include visuals of cutting-edge devices, AI, and futuristic elements, with a sophisticated and sleek design.",
  },
];
export const allTestPodcasts = [
  {
    _id: "1",
    podcastTitle: "The Joe Rogan Experience",
    podcastDescription: "Joe Rogan brings his typical magic",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806",
    authorImageUrl: "/assets/images/player1.png",
    author: "Joe Rogan",
    voicePrompt:
      "Create a voice narration that is friendly, engaging, and clear, suitable for an audience interested in technology and innovation. The voice should be expressive and articulate, providing detailed explanations and captivating storytelling.",
    imagePrompt:
      "Design an image that represents the essence of cutting-edge technology and innovation. The artwork should include elements of futuristic devices, sleek design, and vibrant colors, evoking a sense of curiosity and excitement.",
    authorId,
    imageStorageId: "img_storage_id_1",
    audioStorageId: "audio_storage_id_1",
    audioUrl: "/assets/audio/joe.wav",
    views: 100000,
  },
  {
    _id: "2",
    podcastTitle: "The Futur",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6",
    authorImageUrl: "/assets/images/player1.png",
    author: "Chris Do",
    voicePrompt:
      "Deliver the news in a calm and authoritative voice, with clear enunciation and a measured pace. The voice should be trustworthy and professional, giving listeners a sense of assurance and clarity.",
    imagePrompt:
      "Create a graphic that embodies the concept of modern news. Use elements such as a digital newspaper or a futuristic newsroom setting, with a sleek and minimalist design.",
    authorId,
    imageStorageId: "img_storage_id_2",
    audioUrl: "/assets/audio/Futur.wav",
    views: 100000,
    audioStorageId: "audio_storage_id_2",
  },
  {
    _id: "3",
    podcastTitle: "Waveform",
    podcastDescription: "Join Michelle Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733",
    authorImageUrl: "/assets/images/player1.png",
    author: "Marques Brownlee",
    voicePrompt:
      "The conversation should be lively and engaging, with a friendly and personable tone. The voice should be warm and inviting, making listeners feel as if they are part of the discussion.",
    imagePrompt:
      "Design an image that represents a high-profile conversation. Include visuals of microphones, waveforms, and a vibrant color palette that conveys energy and excitement.",
    authorId,
    imageStorageId: "img_storage_id_3",
    audioUrl: "/assets/audio/waveform.wav",
    views: 100000,
    audioStorageId: "audio_storage_id_3",
  },
  {
    _id: "4",
    podcastTitle: "The Tech Talks Daily Podcast",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445",
    authorImageUrl: "/assets/images/player1.png",
    author: "Neil Hughes",
    voicePrompt:
      "Provide a clear and concise narration that is informative and insightful. The voice should be professional and articulate, offering a straightforward delivery of the latest tech news and insights.",
    imagePrompt:
      "Create a cover image that illustrates the daily updates in technology. Use icons representing gadgets, software, and data, with a clean and modern design.",
    authorId,
    imageStorageId: "img_storage_id_4",
    audioStorageId: "audio_storage_id_4",
    audioUrl: "/assets/audio/Tech.wav",
    views: 100000,
  },
  {
    _id: "5",
    podcastTitle: "GaryVee Audio Experience",
    podcastDescription: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23",
    authorImageUrl: "/assets/images/player1.png",
    author: "Gary Vaynerchuk",
    voicePrompt:
      "Narrate with a passionate and motivational tone, suitable for an audience seeking business and personal development advice. The voice should be energetic and inspiring, with a focus on storytelling and actionable insights.",
    imagePrompt:
      "Design a visual that captures the essence of business and entrepreneurship. Include elements such as graphs, charts, and dynamic typography, with a bold and confident look.",
    authorId,
    imageStorageId: "img_storage_id_5",
    audioStorageId: "audio_storage_id_5",
    audioUrl: "/assets/audio/Garyvee.wav",
    views: 100000,
  },
  {
    _id: "6",
    podcastTitle: "Syntax",
    podcastDescription: "Join Obama in conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5",
    authorImageUrl: "/assets/images/player1.png",
    author: "Wes Bos & Scott Tolinski",
    voicePrompt:
      "Engage in a dialogue that is technical yet approachable, ideal for developers and tech enthusiasts. The voice should be knowledgeable and enthusiastic, offering detailed explanations and practical advice.",
    imagePrompt:
      "Create a cover that reflects the theme of coding and web development. Incorporate visuals of code snippets, browsers, and responsive design, with a vibrant and modern aesthetic.",
    authorId,
    imageStorageId: "img_storage_id_6",
    audioStorageId: "audio_storage_id_6",
    audioUrl: "/assets/audio/syntax.wav",
    views: 100000,
  },
  {
    _id: "7",
    podcastTitle: "IMPAULSIVE",
    podcastDescription: "A long form, in-depth conversation",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c",
    authorImageUrl: "/assets/images/player1.png",
    author: "Logan Paul",
    voicePrompt:
      "Narrate in a bold and candid style, capturing the spontaneity and humor of the podcast. The voice should be charismatic and lively, drawing listeners into the conversation.",
    imagePrompt:
      "Illustrate a theme that represents candid discussions and entertainment. Use graphics of a studio setting, microphones, and vibrant colors, with a playful and engaging design.",
    authorId,
    imageStorageId: "img_storage_id_7",
    audioStorageId: "audio_storage_id_7",
    audioUrl: "/assets/audio/IMPAULSIVE.wav",
    views: 100000,
  },
  {
    _id: "8",
    podcastTitle: "Ted Tech",
    podcastDescription: "This is how the news should sound",
    imageUrl:
      "https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e",
    authorImageUrl: "/assets/images/player1.png",
    author: "TED",
    voicePrompt:
      "Deliver the content in an insightful and thought-provoking manner, appealing to an audience interested in technology and innovation. The voice should be clear and engaging, with a focus on explaining complex ideas in an accessible way.",
    imagePrompt:
      "Design an image that showcases innovative technology. Include visuals of cutting-edge devices, AI, and futuristic elements, with a sophisticated and sleek design.",
    authorId,
    imageStorageId: "img_storage_id_8",
    audioStorageId: "audio_storage_id_8",
    audioUrl: "/assets/audio/TedTech.wav",
    views: 100000,
  },
];
