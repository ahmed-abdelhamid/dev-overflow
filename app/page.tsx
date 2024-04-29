import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Typography variant="h1" weight="bold">
        H1-Bold
      </Typography>
      <br />
      <Typography variant="h2" weight="bold">
        H2-Bold
      </Typography>
      <Typography variant="h2" weight="semibold">
        H2-SemiBold
      </Typography>
      <br />
      <Typography variant="h3" weight="bold">
        H3-Bold
      </Typography>
      <Typography variant="h3" weight="semibold">
        H3-SemiBold
      </Typography>
      <br />
      <Typography variant="base" weight="medium">
        Base-Medium
      </Typography>
      <Typography variant="base" weight="semibold">
        Base-SemiBold
      </Typography>
      <Typography variant="base" weight="bold">
        Base-Bold
      </Typography>
      <br />
      <Typography variant="p" weight="regular">
        Paragraph-Regular
      </Typography>
      <Typography variant="p" weight="medium">
        Paragraph-Medium
      </Typography>
      <Typography variant="p" weight="semibold">
        Paragraph-SemiBold
      </Typography>
      <br />
      <Typography variant="body" weight="regular">
        Body-Regular
      </Typography>
      <Typography variant="body" weight="medium">
        Body-Medium
      </Typography>
      <Typography variant="body" weight="semibold">
        Body-SemiBold
      </Typography>
      <br />
      <Typography variant="small" weight="regular">
        Small-Regular
      </Typography>
      <Typography variant="small" weight="medium">
        Small-Medium
      </Typography>
      <Typography variant="small" weight="semibold">
        Small-SemiBold
      </Typography>
      <br />
      <Typography variant="subtle" weight="medium">
        Subtle-Medium
      </Typography>
      <Typography variant="subtle" weight="regular">
        Subtle-Regular
      </Typography>

      <Typography>Default</Typography>
    </main>
  );
}
