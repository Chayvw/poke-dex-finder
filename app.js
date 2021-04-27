$(() => {
    $("form").on("submit", function (e) {
        e.preventDefault()
        const userInput = $("input[type=text]").val()
        console.log(userInput)

        async function getPokeData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            const data = await response.json()
            const pokeImage = data.sprites.front_default;
            const pokemonType = data.types[0].type.name;
            console.log(pokeImage)
            $("#pokeName").html(data.forms[0].name);
            $("#pokeType").html(pokemonType);
            $("#pokeNum").html(data.id);
            $("#pokeImg").attr("src", pokeImage)
            //  $("pokeType").html(pokemonType)
            //  $("#pokeImg").html(`<img src='${pokeImage}>'`);
            console.log(data)

            const typeArray = [
                {
                    name: "normal",
                    url: "https://pokeapi.co/api/v2/type/1/"
                },
                {
                    name: "fighting",
                    url: "https://pokeapi.co/api/v2/type/2/"
                },
                {
                    name: "flying",
                    url: "https://pokeapi.co/api/v2/type/3/"
                },
                {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/"
                },
                {
                    name: "ground",
                    url: "https://pokeapi.co/api/v2/type/5/"
                },
                {
                    name: "rock",
                    url: "https://pokeapi.co/api/v2/type/6/"
                },
                {
                    name: "bug",
                    url: "https://pokeapi.co/api/v2/type/7/"
                },
                {
                    name: "ghost",
                    url: "https://pokeapi.co/api/v2/type/8/"
                },
                {
                    name: "steel",
                    url: "https://pokeapi.co/api/v2/type/9/"
                },
                {
                    name: "fire",
                    url: "https://pokeapi.co/api/v2/type/10/"
                },
                {
                    name: "water",
                    url: "https://pokeapi.co/api/v2/type/11/"
                },
                {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/"
                },
                {
                    name: "electric",
                    url: "https://pokeapi.co/api/v2/type/13/"
                },
                {
                    name: "psychic",
                    url: "https://pokeapi.co/api/v2/type/14/"
                },
                {
                    name: "ice",
                    url: "https://pokeapi.co/api/v2/type/15/"
                },
                {
                    name: "dragon",
                    url: "https://pokeapi.co/api/v2/type/16/"
                },
                {
                    name: "dark",
                    url: "https://pokeapi.co/api/v2/type/17/"
                },
                {
                    name: "fairy",
                    url: "https://pokeapi.co/api/v2/type/18/"
                },
                {
                    name: "unknown",
                    url: "https://pokeapi.co/api/v2/type/10001/"
                },
                {
                    name: "shadow",
                    url: "https://pokeapi.co/api/v2/type/10002/"
                }
            ]
            // console.log(typeArray[5])
            // for(i = 0; i < typeArray.length; i++){

            if (data.types[0].type.name === typeArray[10].name || typeArray[14].name) {
                $("body").css("background-color","blue");
                
            }
             else if (data.types[0].type.name === typeArray[9].name || typeArray[15].name) {
                $("body").css("background-color","red");

            }
            else if (data.types[0].type.name === typeArray[11].name || typeArray[6].name || typeArray[3].name) {
                $("body").css("background-color","green");

            }

            else if (data.types[0].type.name === typeArray[1].name || typeArray[4].name|| typeArray[5].name) {
                $("body").css("background-color","brown");

            }

            else if (data.types[0].type.name === typeArray[7].name || typeArray[16].name || typeArray[19].name) {
                $("body").css("background-color","purple");

            }
            else console.log("Screen will remain the same")
        }
        // }



        getPokeData()

    })








})





