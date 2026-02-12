import { sanityClient } from "./client";

/**
 * Fetch global settings (email, phone, WhatsApp, social links)
 */
export async function getGlobalSettings() {
  return sanityClient.fetch(
    `*[_type == "globalSettings"][0]{
      email,
      phone,
      whatsapp,
      socialLinks,
      defaultLanguage
    }`
  );
}

/**
 * Fetch homepage sections content
 */
export async function getHomepageContent(locale: string) {
  return sanityClient.fetch(
    `*[_type == "homepage"][0]{
      "hero": hero{
        "title": title.${locale},
        "subtitle": subtitle.${locale},
        "ctaText": ctaText.${locale},
        "whatsappText": whatsappText.${locale}
      },
      "whyItems": whyItems[]{
        "title": title.${locale},
        "description": description.${locale},
        icon
      },
      "servicesPreview": servicesPreview[]{
        "title": title.${locale},
        "description": description.${locale},
        icon
      },
      "processSteps": processSteps[]{
        "title": title.${locale},
        "description": description.${locale},
        stepNumber
      },
      "finalCta": finalCta{
        "title": title.${locale},
        "subtitle": subtitle.${locale}
      }
    }`
  );
}

/**
 * Fetch about page content
 */
export async function getAboutContent(locale: string) {
  return sanityClient.fetch(
    `*[_type == "aboutPage"][0]{
      "aboutText": aboutText.${locale},
      "missionTitle": missionTitle.${locale},
      "missionText": missionText.${locale},
      "visionTitle": visionTitle.${locale},
      "visionText": visionText.${locale},
      "values": values[]{
        "title": title.${locale},
        "description": description.${locale},
        icon
      }
    }`
  );
}

/**
 * Fetch services page content
 */
export async function getServicesContent(locale: string) {
  return sanityClient.fetch(
    `*[_type == "servicesPage"][0]{
      "services": services[]{
        "title": title.${locale},
        "description": description.${locale},
        "features": features[].${locale},
        icon
      }
    }`
  );
}
