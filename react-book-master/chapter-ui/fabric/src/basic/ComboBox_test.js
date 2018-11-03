
import React,{Component} from 'react';
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';
class TextField_text extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    change=(e)=>{
        console.log(e);
    }
    _testOptionsWithCustomStyling = [
        {
          key: 'A',
          text: 'Arial Black',
          styles: {
            optionText: {
              fontFamily: '"Arial Black", "Arial Black_MSFontService", sans-serif'
            }
          }
        },
        {
          key: 'B',
          text: 'Times New Roman',
          styles: {
            optionText: {
              fontFamily: '"Times New Roman", "Times New Roman_MSFontService", serif'
            }
          }
        },
        {
          key: 'C',
          text: 'Comic Sans MS',
          styles: {
            optionText: {
              fontFamily: '"Comic Sans MS", "Comic Sans MS_MSFontService", fantasy'
            }
          }
        },
        {
          key: 'D',
          text: 'Calibri',
          styles: {
            optionText: {
              fontFamily: 'Calibri, Calibri_MSFontService, sans-serif'
            }
          }
        }
      ];
    render() {
        return (
            <ComboBox
                defaultSelectedKey="C"
                label="Custom styled uncontrolled ComboBox (allowFreeform: T, AutoComplete: T):"
                id="Basicdrop6"
                ariaLabel="Custom styled ComboBox example"
                allowFreeform={true}
                autoComplete="on"
                options={this._testOptionsWithCustomStyling}
                styles={{
                container: {
                    maxWidth: '300px'
                }
                }}
                comboBoxOptionStyles={{
                optionText: {
                    fontFamily: 'initial' // this should be overriden by custom styles for each option
                }
                }}
            />

        );
    }
}

export default TextField_text;