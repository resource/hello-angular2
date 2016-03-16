System.register([], function(exports_1) {
    var ProjectsService;
    return {
        setters:[],
        execute: function() {
            ProjectsService = (function () {
                function ProjectsService() {
                }
                /**
                 * Get a list of projects
                 * @returns {{id: number, name: string}[]}
                 */
                ProjectsService.prototype.getProjects = function () {
                    return [{
                            id: "project1",
                            name: "Project 1",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ipsum ante, ornare eu congue ut, congue at lacus. Nam sapien sapien, suscipit nec lacus vel, vestibulum pulvinar risus. Vestibulum molestie lectus sed odio bibendum, ullamcorper imperdiet libero lobortis.",
                            poster: "http://fillmurray.com/300/300"
                        }, {
                            id: "project2",
                            name: "Project 2",
                            description: "Phasellus a feugiat nisl. Cras vel ultricies mauris. Phasellus ultricies, quam hendrerit varius dignissim, mi nulla consectetur lectus, in feugiat nisi orci sit amet est. Nulla vestibulum iaculis erat, in luctus justo sollicitudin vel.",
                            poster: "http://placecage.com/300/300"
                        }, {
                            id: "project3",
                            name: "Project 3",
                            description: "Duis ipsum ante, ornare eu congue ut, congue at lacus. Nam sapien sapien, suscipit nec lacus vel, vestibulum pulvinar risus. Vestibulum molestie lectus sed odio bibendum, ullamcorper imperdiet libero lobortis.",
                            poster: "http://fillmurray.com/200/200"
                        }, {
                            id: "project4",
                            name: "Project 4",
                            description: "Phasellus ultricies, quam hendrerit varius dignissim, mi nulla consectetur lectus, in feugiat nisi orci sit amet est. Nulla vestibulum iaculis erat, in luctus justo sollicitudin vel.",
                            poster: "http://placecage.com/400/400"
                        }];
                };
                return ProjectsService;
            })();
            exports_1("ProjectsService", ProjectsService);
        }
    }
});
//# sourceMappingURL=projects.service.js.map