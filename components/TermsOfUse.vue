<template>
  <div
    class="border-[2px] bg-transparent absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 p-[10px] border-[#635243] z-[100002]"
  >
    <div
      class="md:flex justify-between z-[10001] w-[90%] md:w-[767px] md:h-[400px] bg-[#E9E3DE] border-[2px] border-[#CDC0B6] pl-[40px] pr-[20px] pb-[50px]"
    >
      <img
        class="h-[110%] -translate-x-[34px] translate-y-[7px]"
        src="/termsOfUse/termsofuse.png"
      />
      <div>
        <div
          class="flex gap-[6px] text-[#8EA6A7] text-[12px] leading-5 font-Montserrat font-semibold absolute top-[5px] md:top-[-30px] right-[5px] md:right-[-3px] cursor-pointer"
        >
          Fermer
          <img @click="$emit('closeModal')" src="/close.svg" alt="close btn" />
        </div>
        <h1
          class="text-[#59493C] font-Merriweather font-bold text-[20px] md:text-[24px] leading-5 my-7"
        >
          Condition Générales et Confidentialité
        </h1>
        <div class="overflow-y-scroll max-h-[260px] pr-[42px]">
          <p class="text-[#2C2E2F] text-[12px] md:text-[16px] leading-5">
            Nous proposons un service d'entretien de piscines irréprochable et
            adapté à vos besoins. Que vous ayez besoin d'un nettoyage régulier
            ou d'une maintenance saisonnière, notre équipe d'experts utilise les
            dernières technologies et les meilleures pratiques pour garantir que
            votre piscine reste propre, sûre et prête à l'usage.
          </p>
          <h2
            class="text-[#59493C] font-Merriweather font-bold text-[20px] tracking-widest my-6"
          >
            Heading 1
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            By accessing and using our Website, you accept and agree to be bound
            by the terms and provision of this agreement. Also, when using this
            Website’s services, you shall be subject to any posted guidelines or
            rules applicable to such services. Any participation in this service
            will constitute acceptance of this agreement. If you do not agree to
            abide by the above, please do not use this service.
          </p>
          <h3
            class="text-[#59493C] font-Merriweather font-bold text-[18px] tracking-widest my-6"
          >
            Heading 2
          </h3>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            Nous sommes dédiés à préserver la beauté et la fonctionnalité de
            votre piscine, pour que vous puissiez toujours profiter d'une eau
            cristalline et d'un environnement de baignade sans soucis. Optez
            pour la tranquillité d'esprit avec notre service d'entretien de
            piscines chez Net Pool.
          </p>
          <!-- <h2
            class="text-[#59493C] font-Merriweather font-bold text-[18px] md:text-[20px] tracking-widest my-6"
          >
            3. Use of Google Analytics
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            Our Website uses Google Analytics, a web analytics service provided
            by Google, Inc. ("Google"). Google Analytics uses "cookies", which
            are text files placed on your computer, to help the website analyze
            how users use the site. The information generated by the cookie
            about your use of the website will be transmitted to and stored by
            Google on servers in the United States. Please note that we use
            Google Analytics to measure website traffic and understand how
            visitors use our Website, in order to improve user experience. We do
            not use Google Analytics to collect personal information that
            identifies you.
          </p>
          <h2
            class="text-[#59493C] font-Merriweather font-bold text-[18px] md:text-[20px] tracking-widest my-6"
          >
            4. Information Storage and Security
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            We adopt appropriate data collection, storage and processing
            practices, and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information stored on our Website. Your personal information is
            contained behind secured networks and is only accessible by a
            limited number of persons who have special access rights to such
            systems and are required to keep the information confidential.
          </p>
          <h2
            class="text-[#59493C] font-Merriweather font-bold text-[18px] md:text-[20px] tracking-widest my-6"
          >
            5. Data Disclosure to Third Parties
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties, unless we provide you
            with advance notice. This does not include website hosting partners
            and other parties who assist us in operating our website, conducting
            our business, or servicing you, so long as those parties agree to
            keep this information confidential.
          </p>
          <h2
            class="text-[#59493C] font-Merriweather font-bold text-[18px] md:text-[20px] tracking-widest my-6"
          >
            6. Contact Form
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            The contact form on our website is compliant with Canada's Anti-Spam
            Legislation (CASL). By filling out the contact form on our website,
            you consent to being contacted by us via the email or phone number
            you provide.
          </p>
          <h2
            class="text-[#59493C] font-Merriweather font-bold text-[18px] md:text-[20px] tracking-widest my-6"
          >
            7. Vecteezy Credit
          </h2>
          <p class="text-[#2C2E2F] text-[14px] md:text-[16px] leading-5">
            All illustrations on this website were created by Hasan7 and are
            sourced from Vecteezy. You can find more of Hasan7's work on his
            profile:
            <nuxt-link
              class="text-[#6C8BCB] font-medium cursor-pointer"
              to="https://www.vecteezy.com/members/hasan7"
              target="_blank"
              alt="www.vecteezy.com/members/hasan7"
              >hasan7@vecteezy</nuxt-link
            >
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["openModal"]);
</script>
