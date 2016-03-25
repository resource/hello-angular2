'use strict';

const ITEMS = [
    {
        id: "item-1",
        name: "Item One",
        shortDescription:"Description for item one.",
        longDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas dictum facilisis. Nam scelerisque tincidunt turpis, vitae dapibus sapien sollicitudin non. Sed pellentesque dictum tellus id bibendum. Donec eleifend erat eu pellentesque viverra. Integer at ligula vel lacus fringilla dignissim a a quam. In hac habitasse platea dictumst. Nulla mi sapien, vestibulum vitae aliquam eu, luctus vitae purus. Mauris augue tortor, faucibus ac eleifend quis, feugiat ut ex. Donec eu faucibus tellus. Fusce imperdiet non nisl vitae condimentum. Duis a ligula risus. Proin vitae tincidunt sapien. Curabitur rhoncus elit sed lorem euismod, sed aliquet turpis vulputate. Aliquam vulputate, quam et tincidunt volutpat, ante elit pellentesque urna, non porta neque erat sit amet nisl. Integer scelerisque molestie venenatis.",
        poster:"http://dummyimage.com/600x600/000/fff"
    },{
        id: "item-2",
        name: "Item Two",
        shortDescription:"Description for item two.",
        longDescription:"Sed non tempus nibh. Duis maximus massa non neque ultrices, eget rutrum nisi tempus. Suspendisse sollicitudin lorem a viverra porta. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam at consequat purus. Vivamus congue massa eget massa molestie, ut pulvinar nisl dapibus. Praesent pellentesque elit ex, ac hendrerit sem facilisis ac. Nulla nec laoreet nibh. Etiam quis arcu quam.",
        poster:"http://dummyimage.com/600x600/000/fff"
    },{
        id: "item-3",
        name: "Item Three",
        shortDescription:"Description for item three.",
        longDescription:"Nam massa nulla, luctus eu maximus sit amet, sodales sed ligula. Proin dictum enim nibh, id pretium nunc commodo nec. Nullam vulputate, nunc et tempor finibus, quam augue ornare ipsum, a rhoncus eros turpis auctor diam. Nulla felis dolor, aliquam vel pulvinar quis, vehicula nec nulla. Suspendisse iaculis ultrices eleifend. Ut lobortis egestas ante ac ultricies. Aliquam aliquam massa vitae lorem sodales, et lacinia ipsum dictum. Praesent quis gravida libero, quis aliquet tortor. Morbi vel ante at tellus rhoncus consectetur id ac ipsum. Duis nulla tortor, aliquam eget laoreet eu, congue sollicitudin metus. Aenean eu consectetur urna. Praesent vehicula tincidunt nisl, id eleifend neque tempus malesuada. Nulla ante nisi, interdum et sapien et, condimentum efficitur dolor. Quisque mollis placerat tempor. Vestibulum ultrices urna eget felis hendrerit, vel luctus est aliquet.",
        poster:"http://dummyimage.com/600x600/000/fff"
    },{
        id: "item-4",
        name: "Item Four",
        shortDescription:"Description for item four.",
        longDescription:"Etiam laoreet elementum mi, eu aliquam justo. Maecenas quis purus id tellus facilisis vulputate. Sed tempor ex massa, venenatis varius leo tempor eget. Suspendisse nisi lectus, efficitur non arcu eu, interdum cursus ipsum. Vivamus eu purus in massa auctor tincidunt. Quisque pulvinar lectus odio, ornare rhoncus nunc sollicitudin eget. Nunc sapien ante, lobortis et ullamcorper vel, feugiat a ipsum. Nunc ut tincidunt ipsum. Nullam feugiat elit ut augue suscipit sodales. Integer luctus massa ut est sagittis accumsan. Nam ut vestibulum orci. Sed gravida leo vel nibh varius lacinia.",
        poster:"http://dummyimage.com/600x600/000/fff"
    },{
        id: "item-5",
        name: "Item Five",
        shortDescription:"Description for item five.",
        longDescription:"Fusce quis suscipit lectus. Pellentesque venenatis eu lacus quis porta. Maecenas diam dui, lacinia ut rhoncus vel, cursus gravida urna. Curabitur vestibulum enim non ornare malesuada. Donec euismod luctus lectus, eget fermentum est hendrerit a. Morbi scelerisque metus id quam porta lobortis. Suspendisse et risus vel risus ullamcorper ultricies vitae aliquet elit. Curabitur pellentesque fermentum pulvinar. Sed luctus efficitur ante at auctor. Integer sodales mi in metus sagittis, eu luctus ipsum volutpat. Nullam facilisis posuere mi, ut elementum ipsum auctor et. Nunc varius nisi eu molestie finibus. Donec egestas neque mi, eget aliquam massa ullamcorper eu. Curabitur molestie, diam ut consequat euismod, dui dui venenatis turpis, eget sollicitudin enim eros a purus.",
        poster:"http://dummyimage.com/600x600/000/fff"
    }
];

class ItemsService
{

    getItems()
    {
        return ITEMS;
    }

    getItemWith(id)
    {
        let response = undefined;

        ITEMS.forEach(item => {
           if (item.id === id) { response = item; }
        });

        return response;
    }

}

module.exports = ItemsService;