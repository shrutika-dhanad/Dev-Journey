//......................destructuring.....................

const Course={
CourserName:"Javascript",
CourseInsructuctor:"Hitesh Sir",
CoursePrice:1000
}
console.log(Course)

console.log(Course.CourseInsructuctor) //this is a very common way.

const {CourserName: cN} = Course //cN we can give a another name to CourseName means we deconstruct
console.log(cN)



const student={
    name:"shrutika",
    age:21,
    location:"pcmc",
};
const {name : stud}=student
console.log(stud)

//JSON-javascript object Notation.



const Api={
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 125,
  "public_gists": 6,
  "followers": 60405,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2026-07-22T18:31:24Z"
}

const {id : a}= Api;

console.log(a)