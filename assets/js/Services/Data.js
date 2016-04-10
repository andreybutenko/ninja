ninja.factory('Data', ['$http', function($http) {
    var projects = [
        {
            id: 'kiosk',
            title: 'Inglemoor Kiosk',
            timeframe: 'February 2016 - Currently!',
            tags: ['Angular', 'Sass', 'Team IDEA'],
            description: 'One of the responsibilities of Inglemoor High School\'s student government is to communicate with students. The goal of this project is to give them another touch point with students.',
            icon: '/assets/img/kiosk-icon.png',
            info: true,
            colors: {
                background: '#00798c',
                text: '#ffffff',
                hex: ''
            }
        },
        {
            id: 'bowl',
            title: 'To-Go Bowl',
            timeframe: 'January 2016',
            tags: ['Design', 'Construction', 'Team IDEA'],
            description: 'To-Go Bowls are wasteful for the world, and inconvenient for the user. This project addressed both those issues.',
            icon: '/assets/img/cup-icon.png',
            colors: {
                background: '#628a5c',
                text: '#ffffff',
                hex: ''
            }
        },
        {
            id: 'formalwear',
            title: 'Formal Wear',
            timeframe: 'December 2015',
            tags: ['Nodejs', 'Mongodb', 'Ionic', 'Angular', 'Sass', 'Competition'],
            description: 'An app for students in organizations like FBLA and DECA to get feedback on their formal attire. When preparing for competition, it\'s easy to forget about clothes - an important element of a presentation! Formal Wear helps users get actionable feedback from others.',
            icon: '/assets/img/formalwear-icon.png',
            info: true,
            colors: {
                background: '#ffffff',
                text: '#000000',
                hex: '',
                factor: -0.05
            }
        },
        {
            id: 'candydispenser',
            title: 'Candy Dispenser',
            timeframe: 'December 2016',
            tags: ['Design', 'Construction', 'Team IDEA'],
            description: 'By using elements of what makes holiday traditions memorable, this toy aims to create memorable holidays for children.',
            icon: '/assets/img/dispenser-icon.png',
            info: true,
            colors: {
                background: '#dC9c89',
                text: '#000000',
                hex: ''
            }
        },
        {
            id: 'multiplayer',
            title: 'Multiplayer Demo',
            timeframe: 'Late Summer 2015',
            tags: ['Nodejs', 'Unity', 'C#', 'Networking', 'Modelling'],
            description: 'An exploration of multiplayer. Before this project, I hadn\'t done much work with Unity - the game engine powering the client - real-time networking, or terrain generation. This project was an interesting exploration of all of these topics!',
            icon: 'http://andrey.ninja/assets/images/screenshots/mmo_preview.png',
            info: true,
            colors: {
                background: '#2c3e50',
                text: '#ecf0f1',
                hex: ''
            }
        },
        {
            id: 'obstaclecar',
            title: 'Obstacle-Avoiding Car',
            timeframe: 'Early Summer 2015',
            tags: ['Arduino', 'C++', 'Robotics'],
            description: 'This project was an interesting one, as it was the first time I\'d worked with robotics. The physical difficulties of construction and organization came up, as did the limitations of hardware accuracy. The end result is something I am pretty pleased with.',
            icon: '/assets/img/car-icon.png',
            info: true,
            colors: {
                background: '#a46b49',
                text: '#ffffff',
                hex: '#ffffff'
            }
        },
        {
            id: 'messenger',
            title: 'Instant Messenger',
            timeframe: 'Late Winter 2014',
            tags: ['PHP', 'Networking'],
            description: 'While a project like this was beyond my skill level at the time, I still persevered in creating a very hackish working prototype of an online instant messenger.',
            icon: '',
            info: true,
            colors: {
                background: '#81cfe0',
                text: '#1d2f33',
                hex: '#1d2f33'
            }
        },
        {
            id: 'vasn',
            title: 'VASN',
            timeframe: 'Mid-Winter 2014',
            tags: ['PHP'],
            description: 'A social networking website on this scale was also beyond what I could reasonably achieve at the time, but I was really interested in a project that would test me and ultimately expand my capabilities.',
            icon: '/assets/img/vasn-icon.png',
            colors: {
                background: '#000000',
                text: '#ffffff',
                hex: '#ff7b24',
                factor: 0.1
            }
        }
    ];

    var widgets = [
        {
            title: 'Color Game',
            link: 'http://andrey.ninja/colorgame/',
            description: 'A fun web game.',
            colors: {
                background: '#fa7921',
                text: '#ffffff',
                button: '#f3b61f',
                color: '#000000'
            }
        },
        {
            title: 'Shape Experiment',
            link: 'http://andrey.ninja/shape/',
            description: 'An exploration of Canvas.',
            colors: {
                background: '#2f2f2f',
                text: '#ffffff',
                button: '#cccccc',
                buttonText: '#2f2f2f'
            }
        }
    ];

    var details = {
        bowl: [
            {
                type: 'paragraph',
                data: {
                    text: 'The purpose of this project was to faddress several major issues with to-go boxes. They\'re bad for the environment in that styrofoam is not compostable, they\'re difficult to use because they cannot fit in one hand and be eaten "on the go", and they cannot be microwaved to be re-heated.'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: ''
                }
            },
            {
                type: 'list',
                data: {
                    content: [
                        'Compostable or recyclable; not destined for the landfill',
                        'Hand-held',
                        ''
                    ]
                }
            }
        ],
        vasn: [
            {
                type: 'paragraph',
                data: {
                    text: 'VASN is a social-networking site which had the purpose of exploring my capabilities as a developer at the time. Generally, it was successful, as VASN has many standard social-networking functionality. Posting, commenting, hashtagging, searching, and liking are all fully-functional!'
                }
            },
            {
                type: 'header',
                data: {
                    text: 'Technical Reflections'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'I worked on VASN such a long time ago that it is not really representative of the capabilities I have today. I leave it as a portfolio piece mostly because I\'m personally proud of the dedication I showed in creating something even when I didn\'t know exactly how to.',
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'Some of the weaknesses of VASN are that it doesn\'t use databases (at the time, I didn\'t about databases, and hacked together a folder-file structure), that similar code is copy-and-pasted rather than being centralized (making it so that if I fix a problem in one place, it still exists in another), and generally the code is badly organized.'
                }
            },
            {
                type: 'paragraph',
                data: {
                    text: 'Despite all these limitations I\'m retrospectively placing on it, VASN was a fun project which I was really proud of. If you\'d like to try it out, it\'t accessible at <a href="http://vasn.x10.mx/">vasn.x10.mx</a>.'
                }
            },
            {
                type: 'browser-slideshow',
                data: {
                    url: 'http://vasn.x10.mx/',
                    photos: [
                        '/assets/img/feed.png',
                        '/assets/img/profile.png',
                        '/assets/img/search.png'
                    ]
                }
            }
        ]
    }

    return {
        projects: projects,
        widgets: widgets,
        details: details
    }
}]);
