// Temporary
var games = [
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    },
    {
        title: "Game Title",
        description: "Description of Game",
        imgSrc: "TeefGph.jpeg"
    }
];

descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat arcu eget dui accumsan, a facilisis quam convallis. Proin consequat enim nec ligula varius, id tempus enim venenatis. Vestibulum vitae diam nec ex ultricies semper. Vivamus suscipit, felis at fermentum faucibus, magna dolor gravida nisi, in malesuada eros libero nec magna. Nulla facilisi. Sed nec ligula nulla. Aliquam euismod nisi sit amet ligula ultricies, et bibendum urna posuere. Sed vitae diam vitae sapien vestibulum interdum. In posuere vestibulum lectus ut accumsan. Proin non fringilla turpis. Ut eget risus id ipsum elementum convallis. Ut posuere justo id suscipit consequat. Phasellus finibus, risus quis elementum suscipit, nulla dui egestas lectus, quis fermentum nisi metus a felis. Phasellus sollicitudin eros enim, vel tempor odio luctus vitae. Duis lobortis luctus dui, sit amet tempus ante rutrum nec.",
    "Integer pulvinar nisi arcu, id convallis neque fringilla in. Sed consequat euismod purus vel accumsan. Integer vel ipsum sit amet magna suscipit blandit eget a felis. Ut accumsan lorem id dui placerat, in ullamcorper turpis fermentum. Vestibulum at viverra tortor, sed ultrices justo. Suspendisse in ligula a velit sagittis feugiat. Nullam semper, leo et maximus euismod, lectus nisi tincidunt libero, nec varius turpis arcu eu metus. Morbi laoreet bibendum est a suscipit. Duis vehicula, eros in varius vehicula, orci ipsum faucibus turpis, id dapibus lectus ligula et odio. Proin ac vestibulum libero. Suspendisse tristique metus vel arcu facilisis, eu dictum leo posuere. Suspendisse potenti. Cras consequat venenatis magna, eget dictum lorem fermentum sed. In eget semper diam. Suspendisse potenti.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
]

function getRandomDescription() {
    var randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

function getIcon(index)
{
    var imgSrc = "";
    if (index % 3 == 0)
    {
        imgSrc = "images/Game Icon 3.png"
    }
    else if (index % 2 == 0)
    {
        imgSrc = "images/Game Icon 2.jpeg"
    }
    else
    {
        imgSrc = "images/Game Icon 1.jpeg"
    }
    return imgSrc;
}
// Temporary

function generateGameCards() {
    var gameContainer = document.querySelector('.listOfGames');
    var i = 1;

    games.forEach(function(game) {
        var gameCard = document.createElement('div');
        gameCard.classList.add('gameCard');

        var cardContent = `
        <ul>
            <li><img src="${getIcon(i)}" alt="Game Icon"></li>
            <li class="gameCardTextInfo">
                <p class="mainHeadingText">${game.title + " " + i}</p>
                <p class="subHeadingText">${getRandomDescription()}</p>
            </li>
            <li><button>Play</button></li>
        </ul>
        `;

        gameCard.innerHTML = cardContent;
        gameContainer.appendChild(gameCard);
        i++;
    });
}

function highlightButton(buttonId) {
    var container = document.querySelector('.buttonSorter');
    var buttons = container.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('buttonSorterHighlighted');
    }
    
    var button = document.getElementById(buttonId);
    button.classList.add('buttonSorterHighlighted');
}

generateGameCards();