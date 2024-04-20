const detectWindowWidth = window.innerWidth;

// Import images
import artImageDesk from "../images/art-direction.jpg";
import artImageMob from "../images/art-direction-mob.png";
import brandingImageDesk from "../images/branding.jpg";
import brandingImageMob from "../images/branding-mob.png";
import visualDesignMerchImageDesk from "../images/visual-design-merch.jpg";
import visualDesignMerchImageMob from "../images/visual-design-merch-mob.png";
import motionDesignVideoImageDesk from "../images/motion-design-video.jpg";
import motionDesignVideoImageMob from "../images/motion-design-video-mob.png";
import creativeOperationsSoftwareImageDesk from "../images/creative-operations-software.jpg";
import creativeOperationsSoftwareImageMob from "../images/creative-operations-software-mob.png";
import onDemandCustomerSupportImageDesk from "../images/support.jpg";
import onDemandCustomerSupportImageMob from "../images/support-mob.png";

// Define content array with imported image URLs
const contentArray = [
  {
    title: "Art Direction",
    description:
      "Every project is built for you by an entire studio comprising a Creative Director, Project Manager, and Senior Motion/Graphic Designers, providing a multi-disciplinary art experience and agency-level talent.",
    imageUrl: {
      desktop: artImageDesk,
      mobile: artImageMob,
    },
  },
  {
    title: "Branding",
    description:
      "Blend your existing brand identity elements, typefaces, color palettes, and logos with our team's creative expertise with engaging, ready-to-use artwork that you’re proud of. In under three weeks, we collaborate with you to create a Core Style that sets a refreshed tone for your look and feel.",
    imageUrl: {
      desktop: brandingImageDesk,
      mobile: brandingImageMob,
    },
  },
  {
    title: "Visual Design & Merch",
    description:
      "Each Buildout includes your Vision, a Mood board Presentation, and our team’s creative execution. With a set or custom design deliverable pack, we cater to the specific needs of every Sermon Series, Event, Sub-Ministry Brand, Conference, or Merch Collection to tell the Most Beautiful Story through every design.",
    imageUrl: {
      desktop: visualDesignMerchImageDesk,
      mobile: visualDesignMerchImageMob,
    },
  },
  {
    title: "Motion Design & Video",
    description:
      "Cater to your needs with our Motion Tools for projects like Sermon Bumper Videos, Recaps/Lyric Videos, Design Animation, Guided Prayers, Countdown Videos, Photo Loops, and more. Through an existing Buildout (look and feel), our team combines your vision, design, and context to deliver engaging content for social, web, and in-service displays.",
    imageUrl: {
      desktop: motionDesignVideoImageDesk,
      mobile: motionDesignVideoImageMob,
    },
  },
  {
    title: "Creative Operations Software",
    description:
      "You have been at this creative-content-in-the-church game for years. You know the glaring need for high-quality art and that you need a comprehensive system to manage it all. We have built easy-to-use tools for the stakeholders on your team to onboard, request, track, manage, communicate, and receive your creative content. Login to our Platform and get everything done in half the time without the bandwidth and misscomunication headaches.",
    imageUrl: {
      desktop: creativeOperationsSoftwareImageDesk,
      mobile: creativeOperationsSoftwareImageMob,
    },
  },
  {
    title: "On-Demand Customer Support",
    description:
      "Trying to give feedback on a project? Not sure how to make a request? Ready to onboard a new teammate? Your needs and concerns matter deeply to us. We are ready to hop on a call or communicate through our platform on project threads to get you the help you need. We are in this with you for the long haul. Churches tell us it feels like we are an extension of their staff.",
    imageUrl: {
      desktop: onDemandCustomerSupportImageDesk,
      mobile: onDemandCustomerSupportImageMob,
    },
  },
];

// Function to create HTML elements and append to main-box
function appendContent() {
  const mainBox = document.querySelector(".main-box");

  let DesktopImg;

  contentArray.forEach((content, index) => {
    const li = document.createElement("li");
    li.classList.add("box");

    const divToggleHeading = document.createElement("div");
    divToggleHeading.classList.add(
      "d-flex",
      "d-md-block",
      "justify-content-between",
      "flex-row-reverse",
      "toggle-heading"
    );
    divToggleHeading.innerHTML = `<em>${index + 1}</em><span>${
      content.title
    }</span>`;

    const divDetail = document.createElement("div");
    divDetail.classList.add("detail");
    if (detectWindowWidth < 768) {
      DesktopImg = content.imageUrl.mobile;
    } else {
      DesktopImg = content.imageUrl.desktop;
    }

    divDetail.innerHTML = `
        <h3>${content.title}</h3>
        <p>${content.description}</p><img src="${DesktopImg}" class="img-fluid rounded-3" />`;

    li.appendChild(divToggleHeading);
    li.appendChild(divDetail);

    mainBox.appendChild(li);

    const getAllList = mainBox.querySelectorAll("li");
    getAllList.forEach((first_class, index) => {
      if (index === 0) {
        first_class.classList.add("active");
      }
    });
  });
}

// Call the function to append content
appendContent();
