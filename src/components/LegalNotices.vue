<template>
  <div class="aside mw-100">
    <div class="aside-header d-flex align-items-center p-2 px-4">
      <h3 class="m-0">Mentions légales</h3>
      <router-link
        :to="{ name: 'homepage' }"
        type="button"
        class="aside-close ms-auto"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </router-link>
    </div>

    <div class="aside-content p-4">
      <h4>1. Éditeur du site</h4>
      <p>
        Le site <a href="https://www.johanlopes.fr">www.johanlopes.fr</a> est édité par Johan Lopes,
        concepteur de solutions web indépendant.<br />
        <strong>Adresse</strong> : 90 rue Johnny Hallyday 38230 Charvieu-Chavagneux<br />
        <strong>Contact</strong> : <a href="mailto:contact@johanlopes.fr">contact@johanlopes.fr</a
        ><br />
        <strong>SIREN</strong> : 939&nbsp;087&nbsp;417<br />
        <strong>Directeur de la publication</strong> : Johan Lopes
      </p>

      <h4>2. Hébergement</h4>
      <p>
        Le site est hébergé par le service GitHub Pages de GitHub, Inc. – 88 Colin P Kelly Jr
        Street, San Francisco, CA 94107, États-Unis –
        <a href="https://pages.github.com" target="_blank" rel="noopener">pages.github.com</a>.
      </p>

      <h4>3. Objet du site</h4>
      <p>
        Ce site est le portfolio personnel de Johan Lopes. Il présente son parcours et son activité
        professionnelle de concepteur de solutions web indépendant. Les informations qu'il contient
        sont fournies à titre indicatif et peuvent être modifiées à tout moment. Il ne propose ni
        vente en ligne, ni espace client.
      </p>

      <h4>4. Propriété intellectuelle</h4>
      <p>
        Les textes, la mise en page et les éléments graphiques du site sont la propriété de Johan
        Lopes, à l'exception des éléments mentionnés dans les crédits. Toute reproduction ou
        réutilisation, totale ou partielle, est interdite sans autorisation écrite préalable.
      </p>
      <p>
        Les logos et marques des clients cités restent la propriété de leurs détenteurs respectifs.
        Ils sont affichés uniquement pour illustrer les missions réalisées.
      </p>

      <h4>5. Données personnelles et cookies</h4>
      <p>
        Le site ne comporte ni formulaire, ni compte utilisateur, ni outil de mesure d'audience. Il
        ne dépose aucun cookie sur votre terminal.
      </p>
      <p>Deux prestataires techniques reçoivent néanmoins votre adresse IP lors de la visite :</p>
      <ul>
        <li>
          <strong>GitHub</strong>, l'hébergeur, qui peut la conserver dans ses journaux à des fins
          de sécurité. GitHub est établi aux États-Unis.
        </li>
        <li>
          <strong>Google</strong>, dont le service Google Fonts fournit les polices de caractères du
          site.
        </li>
      </ul>
      <p>
        Si vous me contactez par e-mail ou via LinkedIn, les informations que vous me transmettez
        servent uniquement à vous répondre. Elles ne sont ni cédées ni utilisées à des fins de
        prospection.
      </p>
      <p>
        Conformément au Règlement général sur la protection des données (RGPD) et à la loi
        «&nbsp;Informatique et Libertés&nbsp;», vous disposez d'un droit d'accès, de rectification
        et d'effacement de vos données. Pour l'exercer, écrivez à
        <a href="mailto:contact@johanlopes.fr">contact@johanlopes.fr</a>. Vous pouvez également
        adresser une réclamation à la
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a>.
      </p>

      <h4>6. Liens externes</h4>
      <p>
        Le site contient des liens vers des sites tiers, notamment LinkedIn. Johan Lopes n'exerce
        aucun contrôle sur ces sites et ne peut être tenu responsable de leur contenu.
      </p>

      <h4>7. Responsabilité</h4>
      <p>
        Johan Lopes s'efforce de maintenir le site accessible et ses informations à jour, sans
        pouvoir le garantir. Il ne saurait être tenu responsable d'une interruption du site ou d'un
        dommage résultant de son utilisation.
      </p>

      <h4>8. Droit applicable</h4>
      <p>
        Le site et les présentes mentions légales sont soumis au droit français. Sauf disposition
        légale contraire, tout litige relève des tribunaux compétents de Grenoble.
      </p>

      <h4>Crédits</h4>
      <p class="mb-0 me-auto">Icônes par Icons8 et Font Awesome (CC BY 4.0)</p>
      <p class="mb-0 me-auto">
        Illustrations par
        <a
          href="https://www.freepik.com/vectors/graphic-design"
          class="text-decoration-none mb-0 me-2"
          title="Copyright"
          >storyset | Freepik</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

// Bloque le défilement de la page derrière le panneau
onMounted(() => document.body.classList.add('no-scroll'))
onBeforeUnmount(() => document.body.classList.remove('no-scroll'))
</script>
