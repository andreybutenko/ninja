---
title: Formal Wear
date: 2016-04-23 14:22:10
categories:
- Experience
tags:
- Ionic
- Mobile App Development
- Angular
- Mongo
- Node
cover: "formalwear.png"
contain: true
background: "#e67e22"
text: "#ffffff"
---
Formal Wear is an app for students in organizations like FBLA and DECA to get feedback on their formal attire. When preparing for competition, it's easy to forget about clothes - an important element of a presentation! Formal Wear helps users get actionable feedback from others.
<!-- more -->
<div style="width: 100%; text-align: center;">
    <a href='https://play.google.com/store/apps/details?id=com.andrey.formalwear&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' style="width: 200px;"/></a>
</div>

There are many student organizations where your clothing is a big deal. For example, in DECA and FBLA, events often require either business casual or business formal. Every year, new students wonder what these terms mean, and returning students want to be reassured that what they’re wearing is appropriate.

This problem is what inspired Formal Wear. Formal Wear is designed to help students in DECA, FBLA, MUN, HOSA, and competitive student organizations not just get definitions of appropriate clothing, but also to get feedback and reassurance to make sure they are confident in their clothing.

# Design Decisions

When designing an app, it is important to consider how people use their phones. Often, people expect to be able to quickly get something done and switch to something else as opposed to long-term tasks.

In designing Formal Wear, I wanted to minimize obstacles such that people are able the app as they’d like, accommodating both quick checking of the app as well as giving longer pieces of advice.

This accommodation for quick use begins with registration. Although people are able to create an account in a traditional way - filling out a form with email, password, and other information - it is awkward on a mobile device. Thus, the app also allow the user to continue with Facebook, which means we get basic information like their name right away, and they don’t need to fill out a password every time. It’s very easy to get into the app.

This flexibility in usage continues with giving feedback, the primary function of the app. The primary way to give feedback is by responding to yes-or-no questions asked by the poster. This is an effective compromise between quick responses and real feedback.. The yes-or-no format lets users answer their friend’s questions quickly without taking much time, while at the same giving the poster the information they need are searching for - honest, actionable responses to their specific questions. However, users can also leave comments if they prefer to leave more long-form feedback that might not answer the original poster’s yes-or-no questions directly.

<div class="photos photos-500">
    ![Explore page](/img/formalwear/explore.png)
    ![Clubs page](/img/formalwear/clubs.png)
    ![Tips page](/img/formalwear/tips.png)
</div>

The Explore page is among the first screens you’ll see when using the app, and it has the most relevant functionality of the app very accessible. This serves to give users what they came for as fast as possible.

The Explore page has a button where users can access descriptions for business formal and business casual for both men and women. This page is called fashion tips, and is very important because a lot of new members to clubs like FBLA and DECA don’t know what these terms mean exactly. The main idea of Formal Wear is to get feedback on outfits from others, but this fashion tips section gives users a place to start.

One of the options on the Explore page is to edit profile. The key thing in setting up the profile is to input your school as well as the clubs you’re in, so that other users can connect with you and give you the feedback you need. Formal Wear makes this as painless as possible by providing a checklist of popular clubs so that you don’t need to manually type each. However, if you’re a member of something niche, the form is flexible and you can add custom clubs.

Once your profile is filled out, there are two ways to connect with people: search and the new posts section. Both of these are accessible on the Explore page. Searches can be done for individuals, schools, and clubs. This means you can connect with and give feedback to a diverse range of people, whether you know them personally or if they go to your school. You can also see latest posts on the explore page to give feedback to people as soon as they post. It is important to note that there are privacy settings to disable this for your post.

The whole premise of Formal Wear relies on users giving feedback, which is why I incorporated elements into the design to encourage interaction. Beneath each post, there is a button saying - for example - “Andrey has questions for you!” along with a red badge indicating how many questions there are. The red color draws attention to the button, and the personalized text and exclamation point act as encouragement to answer the questions.

Although the app is currently only available for Android on Google Play, expanding to iOS and Windows Phone in the future are options to expand the user base. Formal Wear is built on top of the Ionic Framework, which means that animations, styles, and behaviors of standard UI elements are slightly different across platforms. This means that even though the app has its own distinctive appearance across platforms, it feels native.

# Technical Details

The app itself is built on the Ionic Framework. This has many benefits, namely that it allows the app to be compiled for different platforms without needing to be re-written. The server runs on Node and the database is Mongo, which is chosen - among other reasons - to standardize the programming language to Javascript for both the front-end and the back-end of the app. This makes development much more efficient and makes it easier to communicate between the server and the app. Both the server and the database run on the AWS Elastic Cloud, while images are stored on S3.

<div class="photos photos-vertical photos-400">
    ![Client-server flow](/img/formalwear/overall-flow.png)
    ![Server flow](/img/formalwear/server-flow.png)
    ![App flow](/img/formalwear/client-flow.png)
</div>

MVC principles were used throughout the engineering of both the server-side code and the client-side code to keep it organized and maintainable.

The app itself uses Angular, and the app is designed to work within that. Views are stored as HTML template files, there are controllers which add functionality to those views, and models are stored in services which save and retrieve data from the server. Angular directives are used for common UI elements to reduce redundancy and increase maintainability.

The server is divided into controllers, which save and retrieve data from Mongoose models, and returns that data in JSON views. The app and the server communicate through this API.

# Lessons Learned

Formal Wear is the largest project I’ve done so far. It broaded my knowledge in a lot of areas I hadn’t done before:

*   **Project scoping**: For a while, development dragged on because I wasn’t sure of what specific features I wanted to implement. To adjust for this issue, I created a list of necessary features, prioritized them, and worked down the list. This additional direction greatly focused and sped up development, something I will continue to use in future projects.
*   **Code organization**: I wanted to ensure maintainability and readability of the code, and accomplished this through several means. I used MVC principles to separate functional components, I looked at examples of existing projects to determine best practices, and used things like Angular directives to reduce bloat. Before this project, I hadn’t worked with Angular, Ionic, or Mongoose much, so the quality of code improved over time. Although I have refactored some old code, I’d like to go back and ensure that all code is of a consistent quality.
*   **Security and privacy**: Because this is public project, security of user data and their privacy is important. I had to work with secure passwords for the database, keys to the AWS virtual machines, and giving the user options in terms of protecting what they post. Although I wouldn’t describe this as an “enterprise” app, I took into account the same concerns which would be used in such a project.
*   **Databases**: I hadn’t worked with databases too much before this project. With Formal Wear, I used Mongoose to store data in an organized way, used passwords to keep data secure, took steps to prevent XSS, and implemented text search.
*   **APIs**: I had to work with creating an internal API for the app as well as external APIs. I used Facebook for login, something which took some time to set up because I had no experience in this area.

# Next Steps

This app was developed in response to a prompt published by FBLA: “An App is to be created that allows FBLA members to interact and share their opinions on style, fashion, and attire.” I looked up the submissions by other FBLA members and found it interesting to compare features and functionality between my apps and theirs.

In April 2016, I presented Formal Wear to judges in Spokane, Washington and got 1st place for Mobile App Development in FBLA State. Although I qualified to present in Atlanta, Georgia and expect that I would be very competitive, I had conflicting plans and was not able to go.

For Formal Wear, I’d like to take some steps to further expand Formal Wear:

*   **Encourage growth**: By using existing Facebook login functionality as well as by working with chapters of student organizations like FBLA and DECA, I’d like to grow the user base. By working directly with chapters, I’ll be able to grow the user base quickly.
*   **More interaction**: A big weakness of Formal Wear is that it is only really relevant to users leading up to competitions. The app could be generalized so that users could quickly get feedback from other users on their outfits throughout the year, be it formal or informal clothing. Such a resource is valuable, especially to fashion-oriented people. Additionally, the fashion tips section can be expanded to not just include descriptions for different category types, but also to offer blog-style content on fashion for users.
*   **Monetization**: This is important for any app. Formal Wear specifically is in a unique position where it can benefit both users and potential advertisers through monetization. For example, companies offering internships and universities seeking applicants are looking for talented students, and students in organizations like FBLA are well-qualified for position. This gives users access to connections and resources that many high school students are looking for already.
