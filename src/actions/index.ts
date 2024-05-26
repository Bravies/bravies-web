import { defineAction, z } from "astro:actions";
import { Analytics } from '@segment/analytics-node';

const analytics = new Analytics({ writeKey: import.meta.env.SEGMENT_WRITE_KEY });

export const server = {
  newsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),

    }),
    handler: async ({ email }) => {
      analytics.track({
        userId: '',
        event: 'Newsletter Subscribed',
        properties: {
          email,
        },
      });

      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
  waitlist: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {

      // call a mailing service, or store to a database
      return { success: true };
    },
  })
};
