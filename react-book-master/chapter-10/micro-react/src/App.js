import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton ,CommandBarButton} from 'office-ui-fabric-react/lib/Button';

import { initializeIcons } from '@uifabric/icons';
initializeIcons();
class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="ms-slideLeftOut40">This content will slide in.</div>
      
      <CommandBarButton
            data-automation-id="test"
            // disabled={disabled}
            // checked={checked}
            iconProps={{ iconName: 'Add' }}
            text="Create account"
            menuProps={{
              items: [
                {
                  key: 'emailMessage',
                  text: 'Email message',
                  iconProps: { iconName: 'Mail' }
                },
                {
                  key: 'calendarEvent',
                  text: 'Calendar event',
                  iconProps: { iconName: 'Calendar' }
                }
              ]
            }}
          />
        <Fabric>
          <DefaultButton>
            I am a button.
          </DefaultButton>
         </Fabric>
         <DefaultButton
            text='See Button'
            primary={ true }
            href='#/components/button'
          />
      </div>
    );
  }
}

export default App;
