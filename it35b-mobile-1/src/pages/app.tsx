import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';

/* Core CSS required for Ionic */
import '@ionic/react/css/core.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">

          {/* SIDE MENU */}
          <IonMenu contentId="main">
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>

            <IonContent>
              <IonList>
                <IonItem routerLink="/home">Home</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/* MAIN ROUTER */}
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact />
            <Redirect exact from="/" to="/home" />
          </IonRouterOutlet>

        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;