import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      message: {
        domain: "hellno.eth-linkloom-or-frameflow.vercel.app",
        timestamp: 1737368931,
        expirationTime: 1745144931
      },
      signature: "9f79b60ae1854f3bba401689094c07e514a5f00f74f908e528b86f3ed49a0eb23341947bb8602dd71b70a5c0c5a8fbd6561615e893d0a3cb9d61a24a5a57a7961b",
      signingKey: "f6154262ba4fc158ff53ed85248e8178a8636989afd564989d18c8eefe81692f"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
