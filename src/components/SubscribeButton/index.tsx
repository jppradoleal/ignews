import { signIn, useSession } from 'next-auth/client';

import { api } from '../../services/api';
import { getStripeJS } from '../../services/stripe.js';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

// Private Keys podem estar em SSR, SSG ou API routes

export function SubscribeButton({priceId}: SubscribeButtonProps) {
  const [session] = useSession();
  async function handleSubscribe() {
    if(!session) {
      signIn('github');
      return;
    }

    // Criação da checkout session
    // API KEY não pode ser exposta aqui

    try {
      const response = await api.post('/subscribe');
    
      const { sessionId } = response.data;

      const stripe = getStripeJS();

      await (await stripe).redirectToCheckout({
        sessionId
      });
    } catch(err) {
      alert(err.message);
    }
  }
  
  return (
    <button 
      type="button" 
      className={styles.subscribeButton}
      onClick={handleSubscribe}  
    >
      Subscribe now
    </button>
  );
}