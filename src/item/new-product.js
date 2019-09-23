import React from 'react';
import { Base } from '../base-class';

export class NewProduct extends Base {
  constructor(props) {
    super(props);
    this.props = props;
    this.errors = [];
    this.imgUrl = 'data:image/jpeg;base64,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';
    this.state = {
      refs: {
          title: React.createRef(),
          description: React.createRef(),
          price: React.createRef(),
      },
      title: '',
      description: '',
      price: 0,
      errors: []
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.showErrors = this.showErrors.bind(this);
   }
 
  handleSubmitForm(event) {
    event.preventDefault();

    console.log('type: ', this.state.refs.title.current.type);
    const titleInput = this.state.refs.title.current;
    const newProduct = {
      title: {
        tag: 'input',
        value: titleInput.value,
        type: titleInput.type,
        regExp: titleInput.dataset.reg,
        validators: [(inputValue) => {
          if (inputValue !== 'test') {
            return 'NOT TEST';
          } 
        }],
        errors: []
      },
      price: {
        value: this.state.price,
        type: 'number',
        regExp: /\d{2,}/
      },
      description: {
        value: this.state.description,
        type: 'text',
        regExp: /[a-zA-Z]]{2,}/
      },
    };

    const errors = this.validateForm(newProduct);
    this.setState({
      errors
    });
    this.errors = errors;
    if (errors.length) {
      console.log(errors);
      // alert(errors.join('; \n'));
      return;
    }

    const products = JSON.parse(localStorage.getItem('products'));
    products.push(Object.assign({
      id: +(new Date())
    }, ...newProduct));
    localStorage.setItem('products', JSON.stringify(products));
    window.location.href = '/catalog';
 }

 validateForm(product) {
   console.log('product: ', product);
   const errors = [];
   for (let key in product) {
     const inputValue = product[key].value || '';
     const validators = product[key].validators || [];
     // const validators = [(inputValue) => {
        //   if (inputValue !== 'test') {
        //     return 'NOT TEST';
        //   }
        // }] ==> 'NOT TEST'
     errors.push(...validators.map(validator => validator(inputValue)));
     const regExp = new RegExp(product[key].regExp, 'gi');
     console.log(inputValue, regExp, inputValue.match(regExp));
     if (regExp && (!inputValue.match(regExp) || inputValue.match(regExp).length > 1)) {
        const error = `${key} wrong`;
        errors.push(error);
     }
    //  if (!inputValue) {
    //    const error = `${key} not exist. It is a required field`;
    //    errors.push(error);
    //  }
    //  switch(product[key].type) {
    //    case 'text':
    //      if (inputValue && typeof parseInt(inputValue) !== 'string') {
    //       errors.push(`${key}: Wrong type. Should be text`);
    //      }
    //      break;

    //      case 'number':
    //        if (inputValue && typeof inputValue !== 'number') {
    //         errors.push(`${key}: Wrong type. Should be number`);
    //        }
    //        break;

    //      default:
    //         errors.push(`${key}: Unrecognized type`);
    //  }
   }
  return errors;
 }

 setValue(event, key) {
   this.setState({
     [key]: event.target.value
   });
 }

 showErrors() {
   const errors = this.state.errors;
   return errors.map((error, key) => (<p key={key}>{error}</p>));
  }

  generateForm() {
    const formConfig = {
      title: {
        tag: 'input',
      },
      title: {
        tag: 'div',
      },
    };
    let form = [];
    for (let key in formConfig) {
      switch (formConfig[key].tag) {
        case 'div':
            const block = (<div>test</div>);
            form.push(block);
            break;

        case 'input':
        case 'default':
            const input = (<input type='text' />);
            form.push(input);
            break;

      }
    }
    return (<div>
      {form.map((el, k) => el)}
      </div>);
  }
  
  render() {
    return (
      <div>
        <div className='product__main-info'>
            <img src={this.imgUrl}
                title={this.title}
                alt={this.title} />
        </div>
        <form className="new-product__form" onSubmit={this.handleSubmitForm}>
          {
            this.showErrors()
          }
          <input type="text" data-reg="[a-zA-Z]{3,7}" ref={this.state.refs.title} placeholder="Product title" />

          <input type="number" value={this.state.price} onChange={e => this.setValue(e, 'price')} placeholder="Product price" />

          <textarea type="text" value={this.state.description} onChange={e => this.setValue(e, 'description')} placeholder="Description" />

          {this.generateForm()}
          <button type="submit" value="">Create new product</button>
        </form>  
      </div>
    );
  }
}
