<template>
  <section id="about" class="bg-white pt-5">
    <div class="container">
      <h2 class="text-primary text-center">Qui suis-je ?</h2>

      <div class="row">
        <div class="col pt-4">
          <div class="d-flex align-items-start mb-5">
            <img src="@/assets/images/icons8-germer-96.png" class="px-3" alt="Début" />
            <div>
              <p class="text-justify">
                Après un cursus universitaire en informatique, j'ai fait mes premières expériences
                professionnelles dans des agences web où j'ai pu faire évoluer mes compétences sur
                le
                <em>langage PHP</em> mais, surtout, rapidement me spécialiser sur le
                <strong>framework Symfony</strong> (depuis sa version 1.1).
              </p>
              <p class="text-justify mb-0">
                Durant ces années, j'ai
                <strong
                  >piloté de nombreux projets de différentes envergures pour des TPE/PME, Startups
                  et Grands comptes.</strong
                >
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-5">
            <img
              src="@/assets/images/icons8-outils-administratifs-96.png"
              alt="Entrepreneuriat"
              class="px-3"
            />
            <div>
              <p class="text-justify">
                En 2015,
                <strong>je me lance dans l'entrepreneuriat</strong>
                pour me consacrer à la création d'une marketplace permettant aux entrepreneurs de
                s'équiper de logiciels SaaS au sein d'un abonnement unique.
                <span class="text-muted">#LeNetflixDesEntrepreneurs</span>
              </p>
              <p class="text-justify mb-0">
                Accompagné par plusieurs structures d'aide aux startups (Lyon Startup,
                Incubateurs...), j'ai pu développer de nombreuses connaissances dans la
                <strong>mise sur le marché d'un produit/service web</strong> : gestion marketing,
                développement commercial, recherche de financements.
              </p>
            </div>
          </div>

          <div class="d-flex align-items-start mb-5">
            <img
              src="@/assets/images/icons8-petite-entreprise-96.png"
              alt="Freelancing"
              class="px-3"
            />
            <div>
              <p class="text-justify fw-bold">
                Depuis {{ new Date().getFullYear() - 2018 }} ans, je propose mes services en tant
                que freelance à des entreprises à fort potentiel !
              </p>
              <p class="text-justify mb-0">
                Mes différentes expériences professionnelles m'ont apporté une certaine polyvalence
                me permettant aujourd'hui d’accompagner mes clients sur de nombreux sujets :
                stratégie, faisabilité technique et fonctionnelle, conception & développement
                technique, automatisation, structuration d’équipes.
              </p>
            </div>
          </div>
        </div>
        <div class="col-4 d-none d-xl-block">
          <!-- La photo n'est téléchargée qu'à partir de xl, où la colonne est visible :
               en dessous, l'image de repli est un pixel transparent en ligne -->
          <picture>
            <source
              media="(min-width: 1200px)"
              srcset="@/assets/images/johan-lopes.webp"
              type="image/webp"
            />
            <img
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt="Johan LOPES"
              class="mw-100 h-auto ps-5"
              width="459"
              height="885"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
