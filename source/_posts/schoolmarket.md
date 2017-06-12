---
title: School Market
theme: dark
background-color: '#3f51b5'
text-color: '#ffffff'
hex-color: '#000000'
hex-icon: 'schoolmarket-icon.png'
construction: false
priority: 5
timeframe: Winter 2016
tags:
- Java
- Android
categories:
- Projects
---
An Android-native app for school clubs to raise money through a "Digital Yard Sale" which students and community members can participate in.
<!-- more -->
School Market was developed to address the FBLA 2017 prompt for mobile app development: an app which allows FBLA chapters to raise funds via a "Digital Yard Sale". At this point, this exists as a proof-of-concept: listing made are created locally, but are not actually published on the internet. The app was structured to make it easy to incorporate the online element, and this is the next step.

The app allows listings to be made and viewed; sellers to be contacted via SMS, Facebook Messenger, and Whatsapp; and uses SugarORM to store data.

This demo improves upon existing fundraising methods by making it easier for participating students to get connected to the community, not only allowing more sales to be made but also creating opportunities for additional fundraising and mentorships.

## Screenshots
{% raw %}
<div class="gallery">
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-1.png"><img src="/images/schoolmarket/ss-1.png"></a>
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-2.png"><img src="/images/schoolmarket/ss-2.png"></a>
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-3.png"><img src="/images/schoolmarket/ss-3.png"></a>
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-4.png"><img src="/images/schoolmarket/ss-4.png"></a>
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-5.png"><img src="/images/schoolmarket/ss-5.png"></a>
  <a data-fancybox="screenshots" href="/images/schoolmarket/ss-6.png"><img src="/images/schoolmarket/ss-6.png"></a>
</div>
{% endraw %}

## Code Design

- There is a clear delegation of tasks using the MVC structures.
  - **Models**: Sugar ORM is used as a database solution for this app. This allows data to stored, retrieved, and manipulated using standard Java techniques. For example, this is how to save a new comment:
`Comment comment = new Comment(listing, author, content);`
`comment.save();`
These models are stored in separate classes from the controllers, and all app data is stored in these models. This app uses four models: Comment, Listing, Photo, and Tag.
  - **Views**: All app views are stored in `/res/layout` and different types of views are marked by prefixes such as `activity_`, `content_`, and `list_`. This keeps the views organized.
  - **Controllers**: Controllers for activities do the logic of retrieving data from models and displaying them in views, or retrieving new data from views and saving them in models.
- Code is DRY by providing utility classes for common operations. CsvHelper, BitmapScaler, and ListingsAdapter all consolidate methods into one place where they were previously repeated in multiple files.

## Technical Challenges Overcome

### Database Solution

It was immediately clear that due to the structure and type of data used by this app, a database solution would be required. There were several options:

- **ActiveAndroid** is perfect for my needs, but is no longer supported and doesn’t build on newer versions of Android Studio.
- **Realm** is too heavy-weight in providing features (such as reactive programming) that I wouldn’t need for this kind of app.
- **Sugar ORM** sticks close to its purpose of being an ORM without any unnecessary frills.

Sugar ORM was the preferred choice because of its simple purpose in being an ORM - I didn’t need the extra functionality of other libraries. However, some limitations did come up which I was able to address.

Sugar ORM does not support one-to-many relationships. Because of this, Listings do not include references to their Photos and Comments. However, by including one-to-one references from Photos and Comments to their Listings and writing some helper methods (i.e. `Listing.getTags()` and `Listing.getComments()`) I was able to make this a non-issue.

Sugar ORM does not support many-to-many relationships. Instead, I have a string of comma-separated values in both Listing and Tags (categories) so that a Listing can save all of its Tags and so that Tags can save all of its Listings. I wrote a helper class to easily convert comma-separated strings to string lists and back, as well as helper methods to turn these `List<String>` to `List<Tag>`.

## Social Media

Particularly for the younger audience of this app, incorporating social media is very important. Research has found that digital word-of-mouth marketing is much more effective than traditional forms of advertisement! For that reason, users can share listings through Android's standard intent system to any social media platform including Facebook, Twitter, and email.

Users already have messaging platforms they are used to and check regularly. For this reason, there is no integrated messaging system! Instead, buyers and sellers can communicate through SMS, Facebook Messenger, and Whatsapp. School Market includes deep links to support all these services!

<script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
