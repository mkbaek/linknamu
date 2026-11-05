// 보여주기용 더미 데이터입니다. 실제 내용으로 바꿔 주세요.

export type LinkItem = {
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자! 요즘에는 AI 개발에 관심이 많아요",
  avatar: "/profile.jpg",
  links: [
    { title: "🐶 깃허브", url: "https://github.com/mkbaek" },
    { title: "📓 블로그", url: "https://blog.naver.com/alsrb5055" },
    { title: "📮 이메일", url: "mailto:alsrb5055@naver.com" },
  ],
};
