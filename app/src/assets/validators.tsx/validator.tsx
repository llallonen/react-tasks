// class validateName() {
//     const pokeName = this.inputTextRef.current!.value;

//     if (pokeName.length < 3) {
//       this.setState({ errorName: `Pokémon's name should contain 3 symbols at least` });
//     }
//     if (pokeName.match(/[0-9]/) !== null) {
//       this.setState({ errorName: `Pokémon's name shouldn't contain numbers` });
//     }
//     if (!/^[A-ZА-Я]/.test(pokeName)) {
//       this.setState({ errorName: `Pokémon's name should start from uppercase` });
//     }
//   }

//   validateDate() {
//     const date = this.inputDateRef.current!.value;
//     if (date) {
//       this.setState({ errorDate: '' });
//     } else {
//       this.setState({ errorDate: 'Please enter date of meeting' });
//     }
//   }

//   validateIsShiny() {
//     const isShiny = this.checkboxRef.current!.checked;
//     if (isShiny) {
//       this.setState({ errorShiny: '' });
//     } else {
//       this.setState({ errorShiny: 'Please check if this Pokémon was shiny' });
//     }
//   }
