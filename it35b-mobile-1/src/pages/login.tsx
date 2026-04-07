import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home';

const Login: React.FC = () => {
const navigation = useIonRouter();

constdologin = () => {
  navigation.push('/app','forward', 'replace');
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonTitle>Blank</IonTitle>
          <IonMenuButton></IonMenuButton>
          <IonButtons></IonButtons>
          </IonButtons>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
       
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login